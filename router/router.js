let welcomePageController = require("../Controllers/WelcomePageController");
let UploadPageController = require("../Controllers/UploadPageController");


module.exports = function(app) {

    app.get('/', welcomePageController.welcomePage);
    app.get('/upload', UploadPageController.uploadPage);

    app.get('*', welcomePageController.errorPage)
};

