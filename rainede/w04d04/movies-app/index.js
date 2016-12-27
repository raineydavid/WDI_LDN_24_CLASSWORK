const express = require('express');
const morgan = require('morgan');
const ejsLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./config/routes');

const app =express();
const port = process.env/PORT || 3000;


const databaseUrl ='mongodb://localhost/movieApp'
mongoose.connect(databaseUrl, () => {return console.log(`Connected to db: ${databaseUrl}`)});

app.set('view engine, 'ejs);
app.set('views', `${__dirname})/views`);


app.use(morgan('dev'));
app.use(express.static(`${__dirname})/bower_components`));
app.use(express.static(`${__dirname})/public`));
app.use(bodyParser.urlencoded( {extended: true}));

app.use(methodOverride)

app.listen(port, )
