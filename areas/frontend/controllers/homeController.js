module.exports = {
    get_index: function (req, res) {
        res.render("home/index", {
            name: 'Monk.Node'
        });
    },
    get_about: function (req, res) {
        res.send("Monk.Node 是 基于 Node.JS 一套 Web MVC 应用解决方案。<br /><br /><a href='/'>前台区域</a>")
    }
};