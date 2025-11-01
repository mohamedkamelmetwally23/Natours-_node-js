const User = require('./../models/userModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');

exports.getAllusers = catchAsync(async(req, res,next) => {
  const users = await User.find();
  res.status(200).json({
    status: 'success',
    data:users
   });
  })

exports.createuser = (req, res) => {
  res.status(500).json({
    status: 'failed',
    message: 'this route is not drfien yet',
  });
};
exports.getuser = (req, res) => {
  res.status(500).json({
    status: 'failed',
    message: 'this route is not drfien yet',
  });
};
exports.updateusers = (req, res) => {
  res.status(500).json({
    status: 'failed',
    message: 'this route is not drfien yet',
  });
};
exports.deleteusers = (req, res) => {
  res.status(500).json({
    status: 'failed',
    message: 'this route is not drfien yet',
  });
};
