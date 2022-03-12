const bcrypt = require('bcrypt');

module.exports.bcrypt = async (myPlaintextPassword) => {
    return await bcrypt.hash(myPlaintextPassword.toString(), 10);
}