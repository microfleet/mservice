const path = require('path');

const { Microfleet: Mservice, ActionTransport } = require('../../..');

const service = new Mservice({
  name: 'tester',
  sigterm: true,
  amqp: {
    transport: {
      connection: {
        host: 'rabbitmq',
      },
    },
    router: {
      enabled: true,
      prefix: 'amqp',
    },
  },
  http: {
    server: {
      attachSocketIO: true,
      handler: 'hapi',
      port: parseInt(process.argv[2], 10),
    },
    router: {
      enabled: true,
    },
  },
  logger: {
    defaultLogger: true,
  },
  plugins: ['validator', 'logger', 'router', 'amqp', 'http', 'socketIO'],
  router: {
    routes: {
      directory: path.resolve(__dirname, '../../router/helpers/actions'),
      prefix: 'action',
      setTransportsAsDefault: true,
      transports: [
        ActionTransport.amqp,
        ActionTransport.http,
        ActionTransport.socketIO,
        ActionTransport.internal,
      ],
      enabledGenericActions: ['health'],
    },
    extensions: {
      enabled: ['postRequest'],
      register: [],
    },
  },
  socketIO: {
    router: {
      enabled: true,
    },
  },
  validator: { schemas: ['../router/helpers/schemas'] },
});

/* eslint-disable no-console */
(async () => {
  try {
    process.stdout.write(`${JSON.stringify(process.argv)}\n`);
    await service.connect();
    process.stdout.write(`${JSON.stringify({ childServiceReady: true })}\n`);
  } catch (e) {
    console.error(e);
    process.exit(128);
  }
})();
