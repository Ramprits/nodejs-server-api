//requiring path and fs modules
const path = require('path');
const fs = require('fs');

module.exports = (app, folderName) => {
    //joining path of directory 
    const directoryPath = path.join(__dirname, "..", folderName);
    //passing directoryPath and callback function
    fs.readdir(directoryPath, function (err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        files.forEach(function (file) {
            // Do whatever you want to do with the file
            app.use(`/${file.split(".")[0]}`, require(path.join(directoryPath, file)))
        });
    });
}
