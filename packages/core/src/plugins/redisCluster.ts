import assert = require('assert')
import Bluebird = require('bluebird')
import _debug = require('debug')
import is = require('is')
import { Microfleet, PluginTypes } from '../'
import _require from '../utils/require'
import migrate from './redis/migrate'
import { hasConnection, isStarted, loadLuaScripts } from './redis/utils'

const debug = _debug('mservice:redisCluster')

/**
 * Plugin name
 */
export const name = 'redis'

/**
 * Plugin type
 */
export const type = PluginTypes.database

/**
 * Attaches Redis Cluster plugin.
 * @param  [conf={}] - Configuration for Redis Cluster Connection.
 * @returns Connections and Destructors.
 */
export function attach(this: Microfleet, conf: any = {}) {
  const service = this
  const Redis = _require('ioredis')
  Redis.Promise = Bluebird

  const {
    ERROR_NOT_STARTED,
    ERROR_ALREADY_STARTED,
  } = require('./redis/constants')

  const { Cluster } = Redis
  const isClusterStarted = isStarted(service, Cluster)

  // optional validation with the plugin
  if (is.fn(service.ifError)) {
    service.ifError('redisCluster', conf)
  }

  return {

    /**
     * @returns Opens redis connection.
     */
    async connect() {
      assert(service.redis == null, ERROR_ALREADY_STARTED)

      const instance = new Cluster(conf.hosts, {
        ...conf.options,
        lazyConnect: true,
      })

      if (service.tracer) {
        const applyInstrumentation = _require('opentracing-js-ioredis')
        applyInstrumentation(service.tracer, instance)
      }

      // attach to instance right away
      if (conf.luaScripts) {
        debug('attaching lua')
        loadLuaScripts.call(service, conf.luaScripts, instance)
      }

      await instance.connect()

      service.addMigrator('redis', migrate, instance, service)
      service.redis = instance
      service.emit('plugin:connect:redisCluster', instance)

      return instance
    },

    /**
     * @returns Returns current status of redis cluster.
     */
    status: hasConnection.bind(service, isClusterStarted),

    /**
     * @returns Closes redis connection.
     */
    async close() {
      assert(isClusterStarted(), ERROR_NOT_STARTED)

      await service.redis
        .quit()
        .catchReturn({ message: 'Connection is closed.' }, null)

      service.redis = null
      service.emit('plugin:close:redisCluster')
    },
  }
}