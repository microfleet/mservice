// @flow
import type { ServiceAction, RouteMap } from '../../../types';

const intersection = require('lodash/intersection');
const glob = require('glob');
const Errors = require('common-errors');
const is = require('is');
const path = require('path');

/**
 * @param {Function} action
 * @param {Function} action.allowed
 * @param {String} action.auth
 * @param {String} action.schema
 * @param {Array} action.transports
 */
function validateAction(action: ServiceAction) {
  if (is.fn(action) === false) {
    throw new Errors.ValidationError('action must be a function');
  }

  if (is.defined(action.allowed) === true && is.fn(action.allowed) !== true) {
    throw new Errors.ValidationError('action.allowed must be a function');
  }

  if (is.defined(action.auth) === true && is.string(action.auth) !== true) {
    throw new Errors.ValidationError('action.auth must be a string');
  }

  if (is.defined(action.schema) === true && is.string(action.schema) !== true) {
    throw new Errors.ValidationError('action.schema must be a string');
  }

  if (is.array(action.transports) === false) {
    throw new Errors.ValidationError('action.transports must be a array');
  }
}

/**
 * @param {Object}   config                        - routes config
 * @param {String}   config.directory              - actions directory
 * @param {Object}   config.enabled                - enabled routes list,
 *                                                   mapped key as filename to value as route name
 * @param {String}   config.prefix                 - routes prefix
 * @param {Boolean}  config.setTransportsAsDefault - set action transports from config transports
 * @param {String[]} config.transports             - enabled transports list
 */
function getRoutes(config: Object): RouteMap {
  // lack of prototype makes it easier to search for a key
  const routes: RouteMap = Object.create(null, {
    _all: {
      value: Object.create(null),
      writable: false,
      enumerable: true,
      configurable: false,
    },
  });

  const enabled = config.enabled;

  // if enabled actions is empty load all actions from directory
  if (Object.keys(enabled).length === 0) {
    glob.sync('*.js', { cwd: config.directory, matchBase: true })
      .forEach((file) => {
        // remove .js from route
        const route = file.slice(0, -3);

        // replace / with . for route
        enabled[route] = route.split(path.sep).join('.');
      });
  }

  config.transports.forEach((transport) => {
    routes[transport] = Object.create(null);
  });

  Object.keys(enabled).forEach((route) => {
    const routingKey = config.prefix.length ? `${config.prefix}.${enabled[route]}` : enabled[route];
    // eslint-disable-next-line import/no-dynamic-require
    const action = require(path.resolve(config.directory, route));

    if (config.setTransportsAsDefault === true && action.transports === undefined) {
      action.transports = config.transports.slice(0);
    }

    validateAction(action);

    // action name is the same as a route name
    action.actionName = enabled[route];

    // add action
    routes._all[routingKey] = action;

    intersection(config.transports, action.transports).forEach((transport) => {
      routes[transport][routingKey] = action;
    });
  });

  return routes;
}

module.exports = getRoutes;
