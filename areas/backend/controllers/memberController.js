module.exports = {
    get_index: function (req, res) {
        res.render("backend/member/index");
    },
    get_create: function (req, res) {
        res.render("backend/member/create");
    }
};