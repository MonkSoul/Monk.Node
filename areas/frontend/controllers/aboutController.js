module.exports = {
    get_index: function (req, res) {
        res.render("about/index");
    },
    get_baisoft:function(req,res){
        res.render("about/baisoft");
    }
};