const enableDestroy = require('server-destroy');
const Errors = require('common-errors');
const express = require('express');
const http = require('http');
const is = require('is');
const Promise = require('bluebird');

function createExpressServer(config, service) {
  const handler = express();
  const server = http.createServer(handler);
  const properties = config.server.handlerConfig && config.server.handlerConfig.properties;

  if (is.object(properties)) {
    Object.keys(properties).forEach((key) => handler.set(key, properties[key]));
  }

  service._http = {
    handler,
    server,
  };

  function startServer() {
    if (service.http.server.listening === true) {
      return Promise.reject(new Errors.NotPermittedError('Http server was already started'));
    }

    if (config.server.attachSocketIO) {
      if (!service._socketio) {
        return Promise.reject(new Errors.NotPermittedError('SocketIO plugin not found'));
      }

      service.socketio.listen(service.http.server);
    }

    return new Promise((resolve, reject) => {
      service.http.server.on('listening', () => {
        service.emit('plugin:start:http', service.http);
        resolve(service.http);
      });
      service.http.server.on('error', (error) => {
        if (error.errno === 'EADDRINUSE' || error.errno === 'EACCES') {
          reject(error);
        }
      });
      service.http.server.listen(config.server.port);
    });
  }

  function stopServer() {
    enableDestroy(service.http.server);

    if (config.server.attachSocketIO) {
      if (!service._socketio) {
        return Promise.reject(new Errors.NotPermittedError('SocketIO plugin not found'));
      }

      service.socketio.httpServer = null;
      service.socketio.close();
    }

    return new Promise((resolve, reject) => {
      service.http.server.destroy((error) => {
        if (error) {
          reject(error);
        }

        service.emit('plugin:stop:http');
        resolve();
      });
    });
  }

  return {
    connect: startServer,
    close: stopServer,
  };
}

module.exports = createExpressServer;
