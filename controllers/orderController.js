const Order = require('../model/orderModel');

const throwError = (res, err) => {
  console.log(err);
  res.status(404).json({
    status: 'fail',
    message: {
      err,
    },
  });
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json({
      status: 'success',
      data: {
        orders,
      },
    });
  } catch (err) {
    throwError(res, err);
  }
};

exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        order,
      },
    });
  } catch (err) {
    throwError(res, err);
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(res.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        order,
      },
    });
  } catch (err) {
    throwError(res, err);
  }
};

exports.updateOrder = async (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'yaaay it did work',
  });
};
