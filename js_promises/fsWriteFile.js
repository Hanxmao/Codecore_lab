// const fs = require('fs');

// function writeFile(fileName, fileContent){
//     return new Promise((res, rej) => {
//         fs.writeFile(fileName, fileContent, (err) => {
//             if(err) rej('Something went wrong.')
//         })
//         res();
//     })
// }

// // writeFile("file.txt", "The contents of my file")
// // .then(() => console.log('File write complete!'))
// // .catch(err => console.log(err));


// writeFile("file.txt", "The contents of my file")
//   .then(function () { console.log("File write complete!") })