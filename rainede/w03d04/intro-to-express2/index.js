var express = require('express');
var app = express();

//Logging
app.use(function(req, res, next){
  console.log('In comes a ' + req.method + 'to ' + req.url);
  next();
});

app.use(function(req, res){
  res.writeHead(200, {'content-Type': 'text/plain'});
  res.end('Hello world');
});

app.listen(3000, function() {
  console.log('Express is aaaalive');
});
