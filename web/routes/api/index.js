const Router = require('@koa/router');
const apiRoutes = new Router();

const tradeRoutes = require('./trade');

apiRoutes.use("trade/", tradeRoutes.routes(), tradeRoutes.allowedMethods());

module.exports = apiRoutes;
