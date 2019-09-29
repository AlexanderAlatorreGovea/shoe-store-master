const Product = require('../models/productsModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handleFactory');
const AppError = require('./../utils/appError');

exports.getAllTours = factory.getAll(Product);