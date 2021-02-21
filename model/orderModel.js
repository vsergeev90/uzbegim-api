const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  cart: {
    type: Array,
    require: true,
  },
  total: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ['pending', 'in progress', 'done'],
    },
  },
  comment: String,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
