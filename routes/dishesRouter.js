const express = require('express');
const dishesController = require('../controllers/dishesController');

const router = express();

router
  .route('/')
  .get(dishesController.getAllDishes)
  .post(dishesController.createDish);

router
  .route('/:id')
  .get(dishesController.getDish)
  .patch(dishesController.updateDish);

module.exports = router;
