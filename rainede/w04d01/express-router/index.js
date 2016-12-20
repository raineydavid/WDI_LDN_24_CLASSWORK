const express = require('express');
const morgan = require('morgan');
const expressLayouts =require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;
const router =require('./config/routes');
const passport = require('passport');
const Strategy = require('passport-twitter').Strategy;
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',router);
app.post('/users' , (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

app.listen(port, () => console.log(`Server is listening on port: ${port}`));
