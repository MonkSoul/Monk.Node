// 获取配置文件
var path = require("path");
var env = process.env.NODE_ENV || "development";
var config = require(path.join(__dirname, '../../../', 'config', 'db.json'))[env];

// 引入生成器
var SequelizeAuto = require('sequelize-auto');
var auto = new SequelizeAuto(config.database, config.username, config.password, config);

// 生成器
module.exports = {
    // 生成models模型
    get_models: function(req, res) {
        auto.run(function(err) {
            if (err) throw err;

            res.render("tools/generate/models", {
                tables: auto.tables,
                foreignKeys: auto.foreignKeys
            });
        });
    }
};