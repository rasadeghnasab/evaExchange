const {Op} = require("sequelize");
const {Share} = require('../../app/models');

const shares = [
    {
        symbol: 'AAA',
        price: 10.11
    },
    {
        symbol: 'BBB',
        price: 20.22
    },
    {
        symbol: 'CCC',
        price: 30.33
    },
    {
        symbol: 'DDD',
        price: 40.44
    },
];

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('shares', shares, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await Share.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');

        // await Share.sequelize.query('SET GLOBAL FOREIGN_KEY_CHECKS = 0;', { raw: true });

        await queryInterface.bulkDelete('shares', {
            symbol: {
                [Op.in]: ['AAA', 'BBB', 'CCC', 'DDD'],
            }
        }, {});

        await Share.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    }
};
