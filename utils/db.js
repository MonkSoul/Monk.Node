"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '..', 'config', 'db.json'))[env];

if (process.env.DATABASE_URL) {
    var sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
var db = {};

fs.readdirSync(path.join(__dirname, config.output))
    .filter(function (file) {
        return (file.indexOf(".") !== 0);
    })
    .forEach(function (file) {
        var model = sequelize.import(path.join(__dirname, '..', 'models', file));
        db[model.name] = model;
    });
Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;