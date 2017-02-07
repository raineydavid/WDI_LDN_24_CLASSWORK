const express     = require('express');
const mongoose    = require('mongoose');
const bodyParser  = require('body-parser');

const app         = express();
const environment = app.get('env');
const port        = process.env.PORT || 3000;
const routes      = require('./config/routes');
const config      = require('./config/config');

mongoose.Promise  = global.Promise;
mongoose.connect(config.db[environment]);

if ('test' !== environment) {
  app.use(require('morgan')('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

app.listen(port, () => console.log(`Express is listening to port ${port}`));

module.exports = app;
