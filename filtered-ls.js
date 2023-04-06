const fs = require('fs');
const path = require('path');

const directoryName = process.argv[2];
const fileExtension = '.' + process.argv[3];
// console.log(fileExtension)

fs.readdir(directoryName, function(err, files) {
  if (err) {
    console.error(err);
    return;
  }

  const filteredFiles = files.filter(function(file) {
    return path.extname(file) === fileExtension;
  });

  filteredFiles.forEach(function(file) {
    console.log(file);
  });
});
