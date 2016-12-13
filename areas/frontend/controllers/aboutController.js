module.exports = {
    get_index: function (req, res) {
        res.render("frontend/about/index");
    },
    get_baisoft:function(req,res){
        res.render("frontend/about/baisoft");
    }
};