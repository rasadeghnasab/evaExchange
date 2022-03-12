const inputValidationException = require("../exceptions/inputValidationException");
const {httpInputValidationError} = require('../exceptions/httpExceptions');
const {User, Portfolio, Share} = require('../../models');
const {randomInt} = require("crypto");

exports.buy = async function (ctx) {
    ctx.status = 200;
    ctx.body = 'buy';
    return;

    const shareObject = {symbol: 'AAA', price: 20.10};
    // const share = await ;

    let userObject = {firstName: 'ramin', lastName: 'sadeghi', email: 'rasadeghnasab@gmail.com', password: 1234};
    const [user, share] = await Promise.all([User.create(userObject), Share.create(shareObject)]);

    const portfolioObject = {
        userId: user.id,
        shareId: share.id,
        amount: randomInt(10, 3000)
    };
    const portfolio = await Portfolio.create(portfolioObject);

    ctx.body = {
        data: user,
        statusCode: 200
    };
};

exports.sell = async function (ctx) {
    ctx.status = 200;
    ctx.body = 'sell';
    return;

    const user = await User.findByPk(1, {include: Portfolio});

    ctx.body = {
        data: user,
        statusCode: 200
    };
};
