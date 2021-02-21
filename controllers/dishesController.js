const Dish = require('../model/dishesModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllDishes = catchAsync(async (req, res) => {
  const menu = await Dish.aggregate([
    {
      $group: {
        _id: '$category',
        groupNum: { $push: '$groupNum' },
        dishes: { $push: '$name' },
        price: { $push: '$price' },
        slug: { $push: '$slug' },
      },
    },
    { $sort: { groupNum: 1 } },
  ]);
  res.status(200).json({
    status: 'ok',
    message: 'everything seems to work',
    data: {
      menu,
    },
  });
});

exports.createDish = catchAsync(async (req, res) => {
  const newDish = await Dish.create(req.body);

  res.status(200).json({
    status: 'success',
    data: {
      newDish,
    },
  });
});

exports.updateDish = catchAsync(async (req, res) => {
  const update = await Dish.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      update,
    },
  });
});

exports.getDish = catchAsync(async (req, res) => {
  const dish = await Dish.find({ slug: req.params.id });

  res.status(200).json({
    status: 'success',
    data: {
      dish,
    },
  });
});
