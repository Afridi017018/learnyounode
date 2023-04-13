const http = require('http');

const url = process.argv[2];

http.get(url, (res) => {
  let data = '';

  res.setEncoding('utf8');
  res.on('data', (plus) => {
    data += plus;
  });


  res.on('end', () => {
    console.log(data.length);
    console.log(data);
  });
});
