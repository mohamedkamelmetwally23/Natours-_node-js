const express = require('express');

const userController = require('../controller/userController');
const authController = require('../controller/authController');

// route

const router = express.Router();
router.post('/signUp', authController.signUp);
router.post('/login', authController.login);

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
