const User   = require('../models/user');
const jwt    = require('jsonwebtoken');
const secret = require('../config/config').secret;

function register(req, res) {
  User.create(req.body.user, (err, user) => {
    if (err) return res.status(400).json(err);

    const payload = { _id: user._id };
    const token = jwt.sign(payload, secret, { expiresIn: 60*60*24 });

    return res.status(200).json({
      message: 'Thanks for registering!',
      token
    });
  });
}

function login(req, res) {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) res.send(500).json(err);
    if (!user || !user.validatePassword(req.body.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const payload = { _id: user._id, username: user.username };
    const token = jwt.sign(payload, secret, { expiresIn: 60*60*24 });

    return res.status(200).json({
      message: 'Login successful!',
      token
    });
  });
}

module.exports = {
  register,
  login
};
