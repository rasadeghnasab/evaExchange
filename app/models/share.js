const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Share extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Share.User = Share.belongsToMany(models.User, {through: models.Portfolio});
            Share.Portfolios = Share.hasMany(models.Portfolio);
        }
    }

    Share.init({
        symbol: {
            type: DataTypes.STRING(3),
            allowNull: false,
            set(value) {
                if (value.length !== 3) {
                    throw new Error('Share should has exactly 3 characters');
                }

                this.setDataValue('symbol', value.toString().toUpperCase());
            }
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Share',
        tableName: 'shares'
    });
    return Share;
};
