const fs = require('fs')

const filePath = process.argv[2]; // get file path from command line argument

const fileContent = fs.readFileSync(filePath); // read file content synchronously

const newlinesCount = fileContent.toString().split('\n').length-1 ; // count number of newlines


// console.log(fileContent.toString().split('\n'))
console.log(newlinesCount); // output result to console
