const async = require('async');
const formidable = require('formidable');
const fs = require('fs');
const mmm = require('mmmagic');
const Magic = mmm.Magic;



module.exports.uploadPage = function(req, res) {
    res.render("upload");
};


module.exports.uploadSong = function(req, res) {
    async.waterfall([
        function (callback) {
        console.log("loop1")
            // get incoming form containing an image only
            let form = formidable.IncomingForm({ uploadDir: __dirname + '../public/sounds' }); // when a file is uploaded it goes into uploads

            form.parse(req, function (err, fields, files) {
                if (err) {
                    callback({status:406, template: "Components/Errors/ErrorServer"}, null)
                } else {
                    const oldPath = files.profilePicture.path;
                    const extention =  files.profilePicture.type.split('/')[1];
                    const name = user.name + cryptoHelper.hash(files.profilePicture.name) + '.' + extention;
                    const newPath = __dirname + "/../public/images/profiles/" + name;
                    callback(null, oldPath, newPath, name) // return all the elements needed to save the image
                }
            });
        },
        function (oldPath, newPath, name, callback) {
            let magic = new Magic(mmm.MAGIC_MIME_TYPE | mmm.MAGIC_MIME_ENCODING);

            magic.detectFile(oldPath, function(err, result) { // check if the file is an image

                if (err) {
                    callback({status:406, template: "Components/Errors/ErrorServer"}, null)
                } else if (!result.match(/image\//g)) {
                    callback({status:406, template: "Components/Errors/ErrorNotAnImage"}, null)
                } else {
                    fs.rename(oldPath, newPath, function (err) {
                        if (err) {
                            callback({status:406, template: "Components/Errors/ErrorServer"}, null)
                        } else {
                            callback(null, name)
                        }
                    });
                }
            });
        },
        function (nameFile, callback) {
            userModel.modifyProfilePicture(req.session.login, nameFile, (err, result) => {
                if (err) {
                    callback({status:406, template: "Components/Errors/ErrorInsert"}, null)
                } else {
                    callback(null, nameFile)
                }
            })
        }
    ], function (err, result) {
        if (err) {
            res.status(err.status);
            res.render(err.template);
        } else {
            res.send(result)
        }
    })
};
