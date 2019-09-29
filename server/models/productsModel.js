const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    alternative_title: {
        type: String
    },
    routeName: {
        type: String,
        required: [true, 'the route must be a string'],
        unique: true,
        trim: true
    },
    gender: [{ male: Boolean, female: Boolean }],
    brand: {
        type: String,
        required: [true, 'A shoe must have a brand'],
        trim: true
    },
    price: Number,
    priceDiscount: {
        type: Number,
        validate: {
          validator: function(val) {
            // this only points to current doc on NEW document creation
            return val < this.price;
          },
          message: 'Discount price ({VALUE}) should be below regular price'
        }
    },
    stock : [
        { size: Number, stock: Number }
    ],
    description: {
        type: String,
        required: [true, 'a shoe must have a rating'],
    },
    image: String
});

const Products = mongoose.model('Product', productSchema);

module.exports = Products;