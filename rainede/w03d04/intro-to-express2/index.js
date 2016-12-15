var express = require('express');
var http = require('http');

var app = express();

app.use(function(req, res){
  res.writeHead(200, {'content-Type': 'text/plain'});
  res.end('Hello world');
});

http.createServer(app).listen(3000, function() {
  console.log('Express is aaaalive');
});
