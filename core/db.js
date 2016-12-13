"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '..', 'config', 'db.json'))[env];

// 获取数据库连接对象是否已经初始化了，如果已经初始化，无需再次指定配置信息
if (process.env.DATABASE_URL) {
    var sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
var db = {};

fs.readdirSync(__dirname, '..', 'models')
    // 过滤不包含.的文件名
    .filter(function (file) {
        return (file.indexOf(".") !== 0);
    })
    // 遍历Models下面所有实体模型，并导入db对象中
    .forEach(function (file) {
        var model = sequelize.import(path.join(__dirname, '..', 'models', file));
        db[model.name] = model;
    });
// 绑定模型关系（1对1，1对多，多对多）
Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;