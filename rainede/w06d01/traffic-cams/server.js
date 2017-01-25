const express  = require('express');
const app      = express();
const mongoose = require('mongoose');
const cors     = require('cors');
const routes   = require('./config/routes');
const port     = process.env.PORT || 3000;

const databaseURL = process.env.MONGOLAB_URL || 'mongodb://localhost:27017/tfl-cameras';
mongoose.connect(databaseURL);

app.use(express.static(`${__dirname}/public`));
app.use(cors());
app.use('/', routes);

app.listen(port, console.log(`Server has stated on port: ${port}`));
