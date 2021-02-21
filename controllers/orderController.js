const Order = require('../model/orderModel');
const APIFeatures = require('../utils/APIFeatures');
const catchAsync = require('./../utils/catchAsync');

exports.getAllOrders = catchAsync(async (req, res) => {
  const features = new APIFeatures(Order.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const orders = await features.query;

  res.status(200).json({
    status: 'success',
    data: {
      orders,
    },
  });
});

exports.createOrder = catchAsync(async (req, res) => {
  const order = await Order.create(req.body);

  res.status(200).json({
    status: 'success',
    data: {
      order,
    },
  });
});

exports.getOrder = catchAsync(async (req, res) => {
  const order = await Order.findById(res.params.id);

  res.status(200).json({
    status: 'success',
    data: {
      order,
    },
  });
});

exports.updateOrder = catchAsync(async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      order,
    },
  });
});

exports.deleteOrder = catchAsync(async (req, res) => {
  await Order.findByIdAndDelete(req.params.id, req.body);

  res.status(204).json({
    status: 'success',
  });
});
