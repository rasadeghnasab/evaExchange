const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Portfolio extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Portfolio.User = Portfolio.belongsTo(models.User);
            Portfolio.Share = Portfolio.belongsTo(models.Share);
        }
    }

    Portfolio.init({
        userId: DataTypes.INTEGER,
        shareId: DataTypes.INTEGER,
        amount: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Portfolio',
        tableName: 'portfolios'
    });

    return Portfolio;
};
