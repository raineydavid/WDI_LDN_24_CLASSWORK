const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/views`));

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

app.get('/', (req, res) => res.send('hello'));
app.get('/about', (req, res) => res.render('about'));
app.get('/contact', (req, res) => res.render('contact'));


app.listen(port, () => console.log(`Started on port: ${port}`));
