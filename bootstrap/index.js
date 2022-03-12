module.exports = (app) => {
    require("./logging");
    require("./routes")(app);
    require("./database");

    return require("./server")(app);
};
