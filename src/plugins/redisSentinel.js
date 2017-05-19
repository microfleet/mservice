// @flow
const Errors = require('common-errors');
const { PluginsTypes } = require('../');
const Promise = require('bluebird');
const is = require('is');
const loadLuaScripts = require('./redis/utils');
const migrate = require('./redis/migrate');
const debug = require('debug')('mservice:redisSentinel');
const _require = require('../utils/require');

exports.name = 'redis';
exports.type = PluginsTypes.database;

exports.attach = function attachRedisSentinel(conf: Object = {}) {
  const service = this;
  const Redis = _require('ioredis');

  // optional validation with the plugin
  if (is.fn(service.validateSync)) {
    const isConfValid = service.validateSync('redisSentinel', conf);
    if (isConfValid.error) throw isConfValid.error;
  }

  debug('loading with config', conf);

  return {
    /**
     * @private
     * @return {Promise}
     */
    connect: function connectRedis() {
      if (service._redis) {
        return Promise.reject(new Errors.NotPermittedError('redis was already started'));
      }

      const instance = new Redis({ ...conf, lazyConnect: true });

      // attach to instance right away
      if (conf.luaScripts) {
        debug('attaching lua');
        loadLuaScripts(conf.luaScripts, instance);
      }

      return instance.connect().then(() => {
        service.addMigrator('redis', migrate, instance, service);
        service._redis = instance;
        service.emit('plugin:connect:redisSentinel', instance);
        return instance;
      });
    },

    /**
     * @private
     * @return {Promise}
     */
    close: function disconnectRedis() {
      if (!service._redis || !(service._redis instanceof Redis)) {
        return Promise.reject(new Errors.NotPermittedError('redis was not started'));
      }

      return service
        ._redis
        .quit()
        .catchReturn({ message: 'Connection is closed.' }, null)
        .tap(() => {
          service._redis = null;
          service.emit('plugin:close:redisSentinel');
        });
    },

  };
};
