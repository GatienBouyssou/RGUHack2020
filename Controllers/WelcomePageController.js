

module.exports.welcomePage = function(req, res) {
    res.render("homePage");
};

module.exports.errorPage = function(req, res) {
    res.render("error404");
};