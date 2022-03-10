const Router = require('@koa/router');
const tradeRoutes = new Router();

const tradeController = require('../../app/http/controllers/tradeController');

tradeRoutes.get("buy", tradeController.buy);
tradeRoutes.get("sell", tradeController.sell);

module.exports = tradeRoutes;
