var gmodels = require('../../../utils/gmodels');
var captcha = require('../../../utils/captcha');
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
    },
    // 生成验证码
    get_captcha: function (req, res) {
        var img = captcha.makeCapcha(110, 40);
        req.session.captcha = img.str;
        res.send(img.getFileData());
    }
};