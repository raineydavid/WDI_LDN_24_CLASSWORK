var express = require('express');
var morgan = require('morgan');
var app = express();

// //Logging
// app.use(function(req, res, next){
//   console.log('In comes a ' + req.method + ' to ' + req.url);
//   next();
// });

app.use(morgan('dev'));

app.get('/',function(req, res){
  res.writeHead(200, {'content-Type': 'text/plain'});
  res.end('Home');
});

app.get('/about',function(req, res){
  res.writeHead(200, {'content-Type': 'text/plain'});
  res.end('About');
});

app.get('*',function(req, res){
  res.writeHead(200, {'content-Type': 'text/plain'});
  res.end('404');
});

app.listen(3000, function() {
  console.log('Express is aaaalive');
});
