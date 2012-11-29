var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
  console.log('request received');
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.write('dotJS rulez\n', 'utf8');
  response.end();
  console.log('response sent');
});

server.listen(8000, function () {
  console.log('Server listening on port 8000...');
});