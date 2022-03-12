const {User} = require("../../app/models");
const {Op} = require("sequelize");

const users = [
    {
        firstName: 'first name A',
        lastName: 'last name A',
        email: 'abcdefghijklmnop@qrsuvw.xyz',
        password: 'my-plain-text-password'
    },
    {
        firstName: 'first name B',
        lastName: 'last name B',
        email: 'abcdefghijklmnop@qrsuvw.xyz',
        password: 'my-plain-text-password'
    },
    {
        firstName: 'first name C',
        lastName: 'last name C',
        email: 'abcdefghijklmnop@qrsuvw.xyz',
        password: 'my-plain-text-password'
    },
    {
        firstName: 'first name D',
        lastName: 'last name D',
        email: 'abcdefghijklmnop@qrsuvw.xyz',
        password: 'my-plain-text-password'
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
        await User.bulkCreate(users, {
            individualHooks: true
        });
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await User.sequelize.query('SET FOREIGN_KEY_CHECKS = 0');

        await queryInterface.bulkDelete('users', {
            firstName: {
                [Op.in]: ['first name A', 'first name B', 'first name C', 'first name D'],
            }
        }, {
            validate: true,
            individualHooks: true,
        });

        await User.sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    }
};
