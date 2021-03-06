import type * as _ from '@microfleet/plugin-logger'
import type * as __ from '@microfleet/plugin-validator'
import assert = require('assert')
import { resolve } from 'path'
import retry = require('bluebird-retry')
import Elasticsearch = require('@elastic/elasticsearch')
import { NotFoundError } from 'common-errors'
import { PluginTypes } from '@microfleet/utils'
import * as AWS from 'aws-sdk'
import { createAwsElasticsearchConnector } from './utils/createAwsElasticsearchConnector'
import { PluginInterface, Microfleet } from '@microfleet/core-types'

declare module '@microfleet/core-types' {
  interface Microfleet {
    awsElasticsearch: Elasticsearch.Client
  }

  interface ConfigurationOptional {
    awsElasticsearch: Config
  }
}

export type Config = Elasticsearch.ClientOptions & {
  accessKeyId: string;
  secretAccessKey: string;
  region?: string;
}

/**
 * Relative priority inside the same plugin group type
 */
export const priority = 0
export const name = 'awsElasticsearch'
export const type = PluginTypes.database
export function attach(
  this: Microfleet,
  opts: Partial<Config> = {}
): PluginInterface {
  assert(this.hasPlugin('logger'), new NotFoundError('logger module must be included'))
  assert(this.hasPlugin('validator'), new NotFoundError('validator module must be included'))

  this.validator.addLocation(resolve(__dirname, '../schemas'))
  const{ accessKeyId, secretAccessKey, region, ...conf } = this.validator
    .ifError<Config>('awsElasticsearch', opts)

  const awsConfig = new AWS.Config({
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
    region,
  })

  // instead of Constructor for Transport/Connection it says to pass on instances
  this.awsElasticsearch = new Elasticsearch.Client({
    ...conf,
    ...createAwsElasticsearchConnector(awsConfig),
  })

  return {
    /**
     * @returns aws-elasticsearch connection.
     */
    async connect(this: Microfleet) {
      await retry(this.awsElasticsearch.nodes.info, {
        context: this.awsElasticsearch.nodes,
        args: [{ nodeId: '', human: true }],
        interval: 500,
        backoff: 2,
        max_interval: 5000,
        timeout: 60000,
        max_tries: 100,
      })

      this.emit('plugin:connect:awsElasticsearch', this.awsElasticsearch)
      return this.awsElasticsearch
    },

    /**
     * @returns Closes aws-elasticsearch connection.
     */
    async close(this: Microfleet) {
      await this.awsElasticsearch.close()
      this.emit('plugin:close:awsElasticsearch')
    },
  }
}
