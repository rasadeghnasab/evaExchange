const inputValidationException = require("../exceptions/inputValidationException");
const {httpInputValidationError} = require('../exceptions/httpExceptions');

exports.buy = async function (ctx) {
    ctx.status = 200;
    ctx.body = {
        data: 'buy',
        statusCode: 200
    };
};

exports.sell = async function (ctx) {
    ctx.status = 200;
    ctx.body = {
        data: 'sell',
        statusCode: 200
    };
};
