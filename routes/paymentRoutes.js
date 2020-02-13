const express = require('express');
const authController = require('./../controllers/authController');

const router = express.Router();

router.post('/', paymentController.checkout);

module.exports = router; 