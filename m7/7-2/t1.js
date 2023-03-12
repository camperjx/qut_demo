const fs = require('fs');
const path = require('path')
// let text = fs.readFileSync("source.txt", "utf8");
// console.log(text);
//
// let text2 = fs.readFileSync("source.txt");
// console.log(text2);

// let text3 = fs.readFileSync(path.basename('f1/source.txt'), "utf8")
// console.log(text3);
//
// let text4 = fs.readFileSync(path.join('f1', 'source.txt'), "utf8")
// console.log(text4);


// fs.readFile(path.basename('f1/source.txt'), "utf8", function (error, text) {
//     if (error) { console.log(error.message); }
//     else { console.log(text); }
// });

let stream = fs.createReadStream("source2.txt", "utf8");
stream.on("data", function(chunk) {
    console.log(`Current chunk: ${chunk}`);
});
stream.on("end", function() { stream.close(); });
stream.on("error", function(error) { console.log(error.message); stream.close(); });