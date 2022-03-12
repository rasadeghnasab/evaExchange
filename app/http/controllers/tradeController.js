const inputValidationException = require("../exceptions/inputValidationException");
const {httpInputValidationError} = require('../exceptions/httpExceptions');
const {User} = require('../../models');

exports.buy = async function (ctx) {
    ctx.status = 200;

    let userObject = {firstName: 'ramin', lastName: 'sadeghi', email: 'rasadeghnasab@gmail.com', password: 1234};
    const user = await User.create(userObject);
    ctx.body = {
        data: user,
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
