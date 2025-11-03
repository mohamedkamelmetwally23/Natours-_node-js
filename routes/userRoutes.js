const express = require('express');

const userController = require('../controller/userController');
const authController = require('../controller/authController');

// route

const router = express.Router();
router.post('/signUp', authController.signUp);
router.post('/login', authController.login);
router.post('/forgotPassWord', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.patch(
  '/updateMyPassword',
  authController.Product,
  authController.updatePassword
);
router.patch('/updateMe', authController.Product, userController.updateMe);
router.delete('/deleteMe', authController.Product, userController.deleteMe);

router
  .route('/')
  .get(userController.getAllusers)
  .post(userController.createuser);
router
  .route('/:id')
  .get(userController.getuser)
  .patch(userController.updateusers)
  .delete(userController.deleteusers);

module.exports = router;
