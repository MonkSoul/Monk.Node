var fs = require("fs");
var path = require("path");

var locals = {};
fs.readdir(path.join(__dirname, "../", "locals"), function (err, list) {
    if (err) {
        return;
    }
    list.forEach(function (file) {
        var ext = path.extname(file).toLowerCase();
        var fileName = path.join(__dirname, "../", "locals") + '/' + file;
        // 支持json文件和模块数据
        if (ext == ".json" || ext == ".js") {
            var local = require(fileName);
            var key = path.basename(file, ".js");

            locals[key] = local;
        }
    });
});

module.exports = locals;