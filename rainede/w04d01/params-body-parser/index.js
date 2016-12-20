const express     = require('express');
const morgan      = require('morgan');
const bodyParser  = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

//use morgan by app.use , express is basically middleware
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true }));
//route handler
// all routes start with /
// app.get('/', (req,res) => res.send('hello world'));
app.get('/', (req,res) => res.render('home'));


app.get('/users/new', (req, res) => res.render('users/new'));

app.get('/users/:id', (req,res) => {
  const user = {
    id: req.params.id
  };
  return res.render('users/show', {user: user});
});

//body content of html when you make a post
app.post('/users' , (req, res) => console.log(req.body));

app.listen(port, () => console.log(`Express has started on port: ${port}`));
