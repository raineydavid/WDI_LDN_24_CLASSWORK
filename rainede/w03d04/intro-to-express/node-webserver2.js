var http = require('http');
// OR import http from 'http'

var app = http.createServer(function(req, res) {
  if(req.url === '/'){
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('<h1>Welcome to the homepage</h1>');
  } else if (req.url === 'about'){
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('Welcome to the about page');
  } else {
    res.writeHead(404, {'content-Type': 'text/plain'});
    res.end('404 error. File not found');
  }

});

app.listen(3000, function() {
  console.log('Server running on local host');
});
