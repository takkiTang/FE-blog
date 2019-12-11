const fs = require("fs");
const folderPath = './docs/';
fs.readdir(folderPath, (err, files) => {
    files.forEach(file => {
        if (fs.statSync(`${folderPath}/${file}`).isDirectory()) {
            fs.readdir(`${folderPath}/${file}`, (err, files) => {
                console.log(file,files)
            })
        }
    });
})