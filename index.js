require("dotenv").config();

// set port, listen for requests
// const PORT = process.env.NODE_DOCKER_PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`);
// });
//
const Koa = require('koa');
const app = new Koa();

const configs = require('./config');

app.context.configs = configs;

const server = require("./bootstrap")(app);

module.exports = server;
