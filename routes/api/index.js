const Router = require('@koa/router');
const apiRoutes = new Router();

const troopsRoutes = require('./trade');

apiRoutes.use("trade/", troopsRoutes.routes(), troopsRoutes.allowedMethods());

module.exports = apiRoutes;
