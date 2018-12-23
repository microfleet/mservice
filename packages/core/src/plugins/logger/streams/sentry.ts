import assert = require('assert')
import * as Sentry from '@sentry/node'
import path = require('path')
import readPkgUp = require('read-pkg-up')
import parentModule = require('parent-module')
import lsmod = require('lsmod')

// keys to be banned
const BAN_LIST = {
  msg: true,
  time: true,
  hostname: true,
  name: true,
  level: true,
}

/**
 * Sentry stream for Pino
 */
class SentryStream {
  private release: string
  private env?: string = process.env.SENTRY_ENVIRONMENT || process.env.NODE_ENV
  private modules?: any = lsmod()

  constructor(opts: any) {
    this.release = opts.release
  }

  /**
   * Method call by Pino to save log record
   * msg is a stringified set of data
   */
  public write(msg: string) {
    const event = JSON.parse(msg)
    const extra = Object.create(null)

    for (const [key, value] of Object.entries<any>(extra)) {
      // @ts-ignore
      if (BAN_LIST[key] === true) continue
      extra[key] = value
    }

    Sentry.captureEvent({
      extra,
      message: event.msg,
      timestamp: event.time,
      level: this.getSentryLevel(event.level),
      platform: 'node',
      server_name: event.hostname,
      logger: event.name,
      release: this.release,
      environment: this.env,
      sdk: {
        name: Sentry.SDK_NAME,
        version: Sentry.SDK_VERSION,
      },
      modules: this.modules,
      fingerprint: ['{{ default }}'],
      stacktrace: event.err ? event.err.stack : event.stack,
    })

    return true
  }

  /**
   * Error deserialiazing function. Bunyan serialize the error to object:
   * https://github.com/trentm/node-bunyan/blob/master/lib/bunyan.js#L1089
   * @param  {object} data serialized Bunyan
   * @return {Error}      the deserialiazed error
   */
  deserializeError(data: any): any {
    if (data instanceof Error) return data

    const error = new Error(data.message) as any
    error.name = data.name
    error.stack = data.stack
    error.code = data.code
    error.signal = data.signal
    return error
  }

  /**
   * Convert Bunyan level number to Sentry level label.
   * Rule : >50=error ; 40=warning ; info otherwise
   */
  getSentryLevel(level: number): Sentry.Severity {
    if (level >= 50) return Sentry.Severity.Error
    if (level === 40) return Sentry.Severity.Warning

    return Sentry.Severity.Info
  }
}

function sentryStreamFactory(config: Sentry.NodeOptions) {
  const { logLevel, dsn } = config

  assert(dsn, '"dsn" property must be set')

  Sentry.init({
    ...config,
    defaultIntegrations: false,
    ...process.env.NODE_ENV === 'test' && {
      integrations: [
        new Sentry.Integrations.Debug(),
      ],
    },
  })

  const dest = new SentryStream({
    release: readPkgUp.sync({ cwd: path.dirname(parentModule()) }).pkg.version,
  })
  // @ts-ignore
  dest[Symbol.for('pino.metadata')] = true

  return {
    level: logLevel || 'error',
    stream: dest,
  }
}

export default sentryStreamFactory
