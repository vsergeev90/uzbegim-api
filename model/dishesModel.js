const mongoose = require('mongoose');

const dishesSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  ingredients: String,
});

const Dish = mongoose.model('Dish', dishesSchema);

module.exports = Dish;
