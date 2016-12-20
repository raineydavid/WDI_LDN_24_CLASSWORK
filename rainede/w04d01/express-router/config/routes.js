const express = require('express');
const router = express.Router();

//good idea to return a res.end send or render
router.get('/', (req, res) => {
  return res.render('home', {title: 'Women In Tech'});
});

router.get('/about', (req, res) => {
 return res.render('about', {title: 'About'});
});

router.get('/contact', (req, res) => {
  return res.render('contact', {  title: 'Contact' });
});

module.exports = router;
