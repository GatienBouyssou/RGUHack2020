let welcomePageController = require("../Controllers/WelcomePageController");
let UploadPageController = require("../Controllers/UploadPageController");
let pianoPageController = require("../Controllers/PianoPageController");


module.exports = function(app) {

    app.get('/', welcomePageController.welcomePage);
    app.get('/upload', UploadPageController.uploadPage);
    app.get('/piano', pianoPageController.pianoMain);

    app.post('/uploadSong', UploadPageController.uploadSong)
    app.get('*', welcomePageController.errorPage)
};

