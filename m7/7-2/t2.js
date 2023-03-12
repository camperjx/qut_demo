const fs = require('fs')
const contents = "The ocean (also the sea or the world ocean) is the body of salt water that covers approximately 70.8% of the surface of Earth and contains 97% of Earth's water."

// fs.writeFileSync("ocean.txt", contents);

// fs.writeFile("ocean.txt", contents, function (error) {
//     if (error) { console.log(error.message); }
// });
//
// let stream = fs.createWriteStream("ocean.txt");
// stream.write(contents);
// stream.end("\nEnd of file");


let firstLine = "The quick brown fox..."
let secondLine = "\n...jumps over the lazy dog."
fs.appendFileSync("jump.txt", firstLine);
fs.appendFile("jump.txt", secondLine, function (error) {
    if (error) { console.log(error.message); }
});