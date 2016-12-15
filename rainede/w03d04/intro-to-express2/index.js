var express = require('express');
var morgan = require('morgan');
var app = express();

// //Logging
// app.use(function(req, res, next){
//   console.log('In comes a ' + req.method + ' to ' + req.url);
//   next();
// });

app.use(morgan('dev'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/',function(req, res){
  res.render('index', {title: 'HOME'});
});

app.get('/',function(req, res){
  res.render('index', {title: 'About'});
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
