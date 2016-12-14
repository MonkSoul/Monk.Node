module.exports = {
    get_index: function (req, res) {
        res.render("home/index", {
            date: new Date()
        });
    }
};