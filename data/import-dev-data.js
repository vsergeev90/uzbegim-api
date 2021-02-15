const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Dish = require('../model/dishesModel');

dotenv.config({ path: '../config.env' });

console.log(process.env.DATABASE, process.argv);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  autoIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const data = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));

const importData = async () => {
  try {
    await Dish.create(data);
    console.log('Data successfully loaded');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Dish.deleteMany();
    console.log('Data successfully deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
}

if (process.argv[2] === '--delete') {
  deleteData();
}
