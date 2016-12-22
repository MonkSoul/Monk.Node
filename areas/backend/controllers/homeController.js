var multer = require('multer');

module.exports = {
    get_index: function (req, res) {
        res.render("home/index");
    },
    // 表单（不带文件上传，不带： enctype="multipart/form-data"）
    post_form1: function (req, res) {
        res.json(req.body);
    },
    // 表单（不带文件上传，带： enctype="multipart/form-data"）：
    post_form2: [multer().array(), function (req, res) {
        res.json(req.body);
    }],
    // 表单（带单个文件上传，带： enctype="multipart/form-data"）：
    post_form3: [multer().single('file1'), function (req, res) {
        res.send("文件：" + JSON.stringify(req.file) + "<br />表单" + JSON.stringify(req.body))
    }],
    // 表单（带多个文件上传，带： enctype="multipart/form-data"）：
    post_form4: [multer().array('file1'), function (req, res) {
        res.send("文件：" + JSON.stringify(req.files) + "<br />表单" + JSON.stringify(req.body))
    }],
    // 表单（带多个文件上传，上传表单名称 不一样(file1,file2,...)，带： enctype="multipart/form-data"）：
    post_form5: [multer().fields([{ name: "file1" }, { name: "file2" }]), function (req, res) {
        res.send("文件：" + JSON.stringify(req.files) + "<br />表单" + JSON.stringify(req.body))
    }]
};