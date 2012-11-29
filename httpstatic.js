var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer();

var notFound = function (response) {
  response.statusCode = 404;
  response.setHeader('Content-Type', 'text/plain');
  response.end('I not haz the page');
};

server.on('request', function (request, response) {
  var filename = null;

  console.log('request received for', request.url);
  if (request.url === '/') {
    filename = './public/index.html';
  }
  else {
    filename = './public' + request.url;
  }

  fs.exists(filename, function (exists) {
    if (!exists) return notFound(response);

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');

    var stream = fs.createReadStream(filename);
    stream.on('data', function (data) {
      response.write(data);
      console.log('returning chunk');
    });
    stream.on('end', function () {
      response.end();
      console.log('response sent');
    });
    stream.on('error', function (err) {
      console.error('Oh no!', err);
    });
  });
});

server.listen(8000, function () {
  console.log('Server listening on port 8000...');
});