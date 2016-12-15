var gmodels = require('../../../utils/gmodels');
// 生成器
module.exports = {
    // 生成models模型
    get_models: function (req, res) {
        gmodels(function (tables, foreignKeys) {
            res.render("generate/models", {
                tables: tables,
                foreignKeys: foreignKeys
            });
        });
    }
};