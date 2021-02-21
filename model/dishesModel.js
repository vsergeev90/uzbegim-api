const mongoose = require('mongoose');
const slugify = require('slugify');

const dishesSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  groupNum: Number,
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: String,
  price: {
    type: Number,
    required: true,
  },
  description: String,
  ingredients: String,
  allergens: String,
});

dishesSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Dish = mongoose.model('Dish', dishesSchema);

module.exports = Dish;
