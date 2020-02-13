const express = require('express');
const productController = require('./../controllers/productController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
    .route('/')
    .get(productController.getAllProducts)
    .post(
        authController.protect,
        authController.restrictTo('admin'),
        productController.createProduct
    );

module.exports = router;


/////////////////JOE/////////////////////////////////


// const categoriesData = require('../dev-data/data/categories');

// app.get('/api/:categories', function(res, req) {
//     res.json(categoriesData)
// })

// app.get('/api/cities', function(res, req) {
//     res.json(citiesData)
// })

// app.get('/api/:city', function(res, req) {
//     res.json(categoriesData)
// })

// app.get('/api/:city/:category', function(res, req) {
//     console.log(req.params.city)

//     let newData;

//     if(req.query.min_price != undefined) {
//          newData = itemsData.filter((item) => {
//              return item.city == req.params.city && item.category == req.params.category
//                     && item.price >= req.query.min_price && item.price <= req.query.max_price
//          })
//      } else {
//          newData = itemsData.filter((item) => {
//              return item.city == req.params.city && item.category == req.params.category
//          })
//      }

//     res.json(newData)
// })

// app.get('/api/:city/:categories/:listings', function(res, req) {
//     res.json(categoriesData)
// })


// app.get('/api/:city/:categories/:listings/:item', function(res, req) {
//     res.json(itemsData)
// })

//cities 

// router.get('/api/:city/:category', function(req, res){
//     let newData;

//     if(req.query.min_price != undefined) {
//         newData = itemsData.filter((item) => {
//             return item.city == req.params.city && item.category == req.params.category
//                    && item.price >= req.query.min_price && item.price <= req.query.max_price
//         })
//     } else {
//         newData = itemsData.filter((item) => {
//             return item.city == req.params.city && item.category == req.params.category
//         })
//     }

//     res.json(newData)
// })
