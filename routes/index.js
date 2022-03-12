const Router = require('@koa/router');
const appRoutes = new Router();
const koaJson = require('koa-json');
const cors = require('@koa/cors');

const configs = require('../config');
const errorHandlerMiddleware = require("../app/http/middlewares/errorHandlingMiddleware");
const routeNotFoundMiddleware = require("../app/http/middlewares/routeNotFoundMiddleware");

const apiRoutes = require('./api').prefix('/api');

appRoutes.use(apiRoutes.routes(), apiRoutes.allowedMethods());

console.log(appRoutes.stack.map(i => i.path));

module.exports = (app) => {
    app.use(errorHandlerMiddleware);
    app.use(koaJson());
    app.use(cors(configs.get('cors')));
    app.use(appRoutes.routes(), appRoutes.allowedMethods());
    app.use(routeNotFoundMiddleware);
};
