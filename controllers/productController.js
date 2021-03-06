const Product = require('../models/productsModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handleFactory');
const AppError = require('./../utils/appError');

exports.getAllProducts = factory.getAll(Product);
exports.createProduct = factory.createOne(Product);
exports.updateProduct = factory.updateOne(Product);
exports.deleteProduct = factory.deleteOne(Product);

// exports.filterTours = catchAsync(async (req, res, next) => {
//     let newData;

//     if(req.query.min_price != undefined) {
//         newData = itemsData.filter((item) => {
//             return item.city == 
//                 req.params.city && item.category == req.params.category && item.price 
//                 >= req.query.min_price && item.price <= req.query.max_price
//         })
//     } else {
//         newData = itemsData.filter((item) => {
//             return item.city == req.params.city && item.category == req.params.category
//         })
//     }

//     res.json(newData);
// });