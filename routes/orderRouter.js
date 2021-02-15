const express = require('express');
const orderController = require('../controllers/orderController');

const router = express();

router
  .route('/')
  .get(orderController.getAllOrders)
  .post(orderController.createOrder);

router.route('/:id').get(orderController.getOrder);

module.exports = router;
