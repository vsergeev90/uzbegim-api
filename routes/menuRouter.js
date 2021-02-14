const express = require('express');
const menuController = require('../controllers/menuController');

const router = express();

router
  .route('/')
  .get(menuController.getAllDishes)
  .post(menuController.createDish);

router
  .route('/:id')
  .get(menuController.getDish)
  .patch(menuController.updateDish);

module.exports = router;
