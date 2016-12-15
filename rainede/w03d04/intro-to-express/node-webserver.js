var http = require('http');
// OR import http from 'http'

var app = http.createServer(function(request, response) {

  var answer = '';
  answer += 'Request URL: ' + request.url + '\n';
  answer += 'Request type/verb: ' + request.method + '\n';
  answer += 'Request headers: ' + JSON.stringify(request.headers) + '\n';

  response.writeHead(200, {
    'content-Type': 'text/plain'
  });
  // console.log(request);
  response.end(answer);
  // response.writeHead(200, {
  //   'content-Type': 'text/plain'
  // });
  // response.end('Hello World');
});

app.listen(3000, function() {
  console.log('Server running on local host');
});
