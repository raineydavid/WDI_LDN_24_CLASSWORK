const express   = require ('express');
const morgan    = require ('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);

//use morgan by app.use , express is basically middleware
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));

//route handler
// app.get('/', (req,res) => res.send('hello world'));
app.get('/', (req,res) => res.render('home'));

app.get('/users/:id', (req,res) => {
  const user = {
    id: req.params.id
  };
  return res.render('users/show', {user: user});
});

//
// app.get('/users/:id', (req, res) => res.render('users/show', {user: req.params));

// //patterned url
// app.get('/users/:id', (req, res) => console.log(req.params));
// //similar to params, optional... searching for stuff after ?
// app.get('/users/:id', (req, res) => console.log(req.query));


//proxy method for the http server create method
app.listen(port, () => console.log(`Express has started on port: ${port}`));
