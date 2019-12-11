const fs = require('fs')

const path = require("path")

// 获取文件名，不带后缀
function getDir(path) {
    fs.readdir(path, (err, files) => {
        let data = files.map(item => item.replace(/(.*\/)*([^.]+).*/ig, "$2")) // 去除文件后缀
        console.log(data)
    })
}

// 写入文件 
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        console.log("数据写入成功！")
    })
}


getDir('./css')