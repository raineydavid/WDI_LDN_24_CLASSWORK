const express     = require('express');
const port        = process.env.PORT || 3000;
const app         = express();
const dest        = `${__dirname}/public`;
const mongoose    = require('mongoose');
const config      = require('./config/config');
const environment = app.get('env');

mongoose.connect(config.db[environment]);
app.use(express.static(dest));

const Shoe = require('./models/shoe');

app.get('/api/shoes', (req, res) => {
  Shoe.find((err, shoes) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(200).json(shoes);
  });
});

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));


app.listen(port, () => console.log(`Express has started on port: ${port}`));
module.exports = app;
