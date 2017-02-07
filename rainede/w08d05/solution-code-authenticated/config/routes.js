// create an express router
const router = require('express').Router();

// require jsonwebtoken stuffs
const jwt    = require('jsonwebtoken');
const config = require('./config');

// require our controller(s)
const shoes           = require('../controllers/shoes');
const authentications = require('../controllers/authentications');

// middleware to check for token
function secureRoute(req, res, next) {
  if (!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized' });

  const token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, config.secret, (err, payload) => {
    if (err || !payload) return res.status(401).json({ message: 'Unauthorized' });

    req.user = payload;
    next();
  });
}

// hook up our controller methods to urls/paths
router.route('/shoes')
  .get(shoes.index)
  .post(secureRoute, shoes.create);

router.route('/shoes/:id')
  .get(shoes.show)
  .put(secureRoute, shoes.update)
  .patch(secureRoute, shoes.update)
  .delete(secureRoute, shoes.delete);

router.post('/register', authentications.register);
router.post('/login', authentications.login);

// export the router
module.exports = router;
