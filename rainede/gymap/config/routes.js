const express = require('express');
const router = express.Router(); //calling the Router

const gyms = require('../controllers/gyms');

router.route('/gyms')
  .get(gyms.index);

module.exports = router;
