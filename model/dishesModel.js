const mongoose = require('mongoose');

const dishesSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  ingredients: String,
  allergens: String,
});

const Dish = mongoose.model('Dish', dishesSchema);

module.exports = Dish;
