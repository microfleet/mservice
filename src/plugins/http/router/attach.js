const bodyParser = require('body-parser');
const getHTTPRouterAdapter = require('./adapter');
const verifyPossibility = require('./../../router/verifyAttachPossibility');

function attachHTTPRouter(handler, router) {
  verifyPossibility(router, 'http');
  handler.use(bodyParser.json());
  handler.post('*', getHTTPRouterAdapter(router));
}

module.exports = attachHTTPRouter;
