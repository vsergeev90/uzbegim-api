const Dish = require('../model/dishesModel');

const throwError = (res, err) => {
  console.log(err);
  res.status(404).json({
    status: 'fail',
    message: {
      err,
    },
  });
};

exports.getAllDishes = async (req, res) => {
  try {
    const menu = await Dish.aggregate([
      {
        $group: {
          _id: '$category',
          dishes: { $push: '$name' },
          price: { $push: '$price' },
        },
      },
    ]);

    res.status(200).json({
      status: 'ok',
      message: 'everything seems to work',
      data: {
        menu,
      },
    });
  } catch (err) {
    throwError(res, err);
  }
};

exports.createDish = async (req, res) => {
  try {
    const newDish = await Dish.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        newDish,
      },
    });
  } catch (err) {
    throwError(res, err);
  }
};

// need some additional modifications
exports.updateDish = async (req, res) => {
  try {
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
  } catch (err) {
    throwError(res, err);
  }
};

exports.getDish = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        dish,
      },
    });
  } catch (err) {
    throwError(res, err);
  }
};
