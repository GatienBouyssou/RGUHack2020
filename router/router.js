let welcomePageController = require("../Controllers/WelcomePageController");


module.exports = function(app) {

    app.get('/', welcomePageController.welcomePage);

    app.get('*', welcomePageController.errorPage)
};