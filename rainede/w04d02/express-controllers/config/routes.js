const express = require('express');
const router  = express.Router();
const foodsController  = require('../controllers/foodsController');

// root path
router.get('/', (req, res) => {
  res.redirect(302, '/foods');
});

// Food Restful routes
//
// // INDEX
// router.get('/foods',foodsController.index );
//
// // NEW
// router.get('/foods/new',foodsController.new);
//
// // CREATE
// router.post('/foods',foodsController.edit );
//
// // SHOW
// router.get('/foods/:id', foodsController.show);
//
// // EDIT
// router.get('/foods/:id/edit', foodsController.edit );
//
// // UPDATE
// router.put('/foods/:id',foodsController.update );
//
// // DELETE
// router.delete('/foods/:id',foodsController.delete );

// router.route('/foods').get(foodsController.index).post(foodsController.create);
router.route('/foods')
.get(foodsController.index)
.post(foodsController.create);

router.route('foods/new')
.get(foodsController.new);

router.route('foods/:id')
.get(foodsController.show)
.put(foodsController.update)
.delete(foodsController.delete);

router.route('foods/:id/edit')
.get(foodsController.edit);

module.exports = router;
