module.exports = {
    get_index: function (req, res) {
        res.render("frontend/home/index",{
            date:new Date()
        });
    }
};