const database = require("../app/models");

module.exports = (() => {
    database.sequelize.sync()
        .then(() => {
            console.log('database synced');
        });
})();
