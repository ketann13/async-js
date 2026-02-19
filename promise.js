const fs = require("fs");

function readFilePromisified(filepath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, encoding, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

readFilePromisified("a.txt", "utf-8")
    .then(function (content) {
        console.log(content);
    })
    .catch(function (err) {
        console.log("There is a problem:", err.message);
    });
