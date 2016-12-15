module.exports = {
    get_index: function (req, res) {
        res.render("home/index", {
            name: 'Monk.Node'
        });
    }
};