const mymodule = require('./mymodule');

const dir = process.argv[2];
const ext = process.argv[3];

mymodule(dir, ext, function (err, files) {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach(function (file) {
    console.log(file);
  });
});
