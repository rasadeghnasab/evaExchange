const {User, Portfolio, Share} = require("../../app/models");
const {Op} = require("sequelize");

const portfolios = [
    {
        amount: 1111,
        user: {
            firstName: 'first name PortA',
            lastName: 'last name PortA',
            email: 'abcdefghijklmnop@qrsuvw.xyz',
            password: 'my-plain-text-password'
        },
        share: {
            symbol: 'PAA',
            price: 10.11
        },
    },
    {
        amount: 2222,
        user: {
            firstName: 'first name PortB',
            lastName: 'last name PortB',
            email: 'abcdefghijklmnop@qrsuvw.xyz',
            password: 'my-plain-text-password'
        },
        share: {
            symbol: 'PBB',
            price: 20.22
        },
    },
    {
        amount: 3333,
        user: {
            firstName: 'first name PortC',
            lastName: 'last name PortC',
            email: 'abcdefghijklmnop@qrsuvw.xyz',
            password: 'my-plain-text-password'
        },
        share: {
            symbol: 'PCC',
            price: 30.33,
        },
    },
    {
        amount: 4444,
        user: {
            firstName: 'first name PortD',
            lastName: 'last name PortD',
            email: 'abcdefghijklmnop@qrsuvw.xyz',
            password: 'my-plain-text-password'
        },
        share: {
            symbol: 'PDD',
            price: 40.44,
        },
    }

];

module.exports = {
    async up(queryInterface, Sequelize) {
        for (let portfolio of portfolios) {
            const [user, share] = await Promise.all([
                User.create(portfolio.user),
                Share.create(portfolio.share)
            ]);

            portfolio.userId = user.id;
            portfolio.shareId = share.id;

            try {
                await Portfolio.create(portfolio);
            } catch (exception) {
                console.error(exception.message);
            }
        }
    },

    async down(queryInterface, Sequelize) {
        await Share.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
        await queryInterface.bulkDelete('portfolios', {
            amount: {
                [Op.in]: [1111, 2222, 3333, 4444]
            }
        }, {})
        await Share.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    }
};
