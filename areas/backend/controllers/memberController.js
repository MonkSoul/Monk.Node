module.exports = {
    get_index: function (req, res) {
        res.render("member/index");
    },
    get_create: function (req, res) {
        res.render("member/create");
    }
};