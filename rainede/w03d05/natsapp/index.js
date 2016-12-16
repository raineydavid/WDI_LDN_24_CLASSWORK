const express = require('express');
const morgan = require('morgan');

//Crete an express app by invoking the express function
const app = express();
const port = process.env.PORT || 3000;

//use morgan for logging - use because we are using a bit of middleware
app.use(morgan('dev'));

//The directory that we are going to put our view files in , use backticks only for multiline strings or string interpolation
app.set('views', `${__dirname}/views`);


//What templating engine we are going to use, http://www.embeddedjs.com
app.set('view engine', 'ejs');


// GET / - our home page
// app.get('/', (req,res,next) => res.send('Hello world'));
app.get('/', (req,res,next) => res.render('home'));

app.listen(port, () => console.log(`Express has started on ${port}`));
