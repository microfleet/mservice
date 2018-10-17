import assert = require('assert');
import { NotFoundError, NotSupportedError } from 'common-errors';
import is = require('is');
import noop = require('lodash/noop');
import { ActionTransport, Microfleet, PluginTypes } from '../';
import { IServiceRequest } from '../types';
import getRouter from './router/factory';

const identity = <T>(arg: T) => arg;
const { internal } = ActionTransport;

/**
 * Plugin Name
 */
export const name = 'router';

/**
 * Plugin Type
 */
export const type = PluginTypes.essential;

/**
 * Fills gaps in default service request.
 * @param request - service request.
 * @returns Prepared service request.
 */
const prepareRequest = (request: IServiceRequest): IServiceRequest => ({
  // initiate action to ensure that we have prepared proto fo the object
  // input params
  // make sure we standardize the request
  // to provide similar interfaces
  action: null as any,
  headers: { ...request.headers },
  locals: { ...request.locals },
  log: console as any,
  method: internal,
  params: { ...request.params },
  parentSpan: undefined,
  query: Object.create(null),
  route: '',
  span: undefined,
  transport: internal,
  transportRequest: Object.create(null),
});

/**
 * Enables router plugin.
 * @param {Object} config - Router configuration object.
 */
export function attach(this: Microfleet, config: any = {}) {
  const service = this;

  assert(service.plugins.includes('log'), new NotFoundError('log module must be included'));
  assert(service.plugins.includes('validator'), new NotFoundError('validator module must be included'));
  service.ifError('router', config);

  for (const transport of config.routes.transports) {
    if (service.config.plugins.includes(transport) === false && transport !== internal) {
      throw new NotSupportedError(`transport ${transport}`);
    }
  }

  this.router = getRouter(config, service);

  const { prefix } = config.routes;
  const assemble = prefix
    ? (route: string) => `${prefix}.${route}`
    : identity;

  // dispatcher
  this.dispatch = (route: string, request: IServiceRequest) => {
    const opts = prepareRequest(request);
    return this.router.dispatch(assemble(route), opts);
  };
}
