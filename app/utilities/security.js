const bcrypt = require('bcrypt');

module.exports.bcrypt = async (text) => await bcrypt.hash(text.toString(), 10);
