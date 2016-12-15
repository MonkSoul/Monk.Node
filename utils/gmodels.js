var path = require("path");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '../', 'config', 'db.json'))[env];

var SequelizeAuto = require('sequelize-auto');
var auto = new SequelizeAuto(config.database, config.username, config.password, config);

module.exports = function (cb) {
    auto.run(function (err) {
        if (err) throw err;
        if (typeof cb == 'function') {
            cb(auto.tables, auto.foreignKeys);
        }
    });
}