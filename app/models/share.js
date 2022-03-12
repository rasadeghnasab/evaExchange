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
        }
    }

    Share.init({
        symbol: {
            type: DataTypes.STRING(3),
            allowNull: false,
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