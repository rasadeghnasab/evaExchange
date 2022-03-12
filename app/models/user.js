const {Model} = require('sequelize');
const {bcrypt} = require('../utilities/security');

const hashPasswordHook = async (user) => {
    if (!user.changed('password')) return null;

    user.password = await bcrypt(user.password);
};

const randomizeEmailHook = async (user) => {
    user.email = user.email.split('').sort(function () {
        return 0.5 - Math.random()
    }).join('');
}

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.Portfolios = User.hasMany(models.Portfolio);
        }
    }

    User.init({
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users'
    });

    User.beforeCreate(hashPasswordHook);
    User.beforeUpdate(hashPasswordHook);

    User.beforeCreate(randomizeEmailHook);
    User.beforeUpdate(randomizeEmailHook);

    return User;
};
