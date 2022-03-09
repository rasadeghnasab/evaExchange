const Router = require('@koa/router');
const tradeRoutes = new Router();

const tradeController = require('../../app/http/controllers/tradeController');

tradeRoutes.get("buy", tradeController.sell);
tradeRoutes.get("sell", tradeController.buy);

module.exports = tradeRoutes;
