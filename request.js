const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
.on('error', function (err) {
  console.log(err);
})
.on('response', function (response) {
  console.log('Response Status Code: ', response.statusCode);
  console.log('Response Status Message: ', response.statusMessage);
  console.log('Content Type: ', response.headers['content-type']);
  console.log('Downloading image...');
})
.on('end', function () {
  console.log('Download Completed');
})
.pipe(fs.createWriteStream('./future.jpg'));


