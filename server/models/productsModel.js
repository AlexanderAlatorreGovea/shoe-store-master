const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
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
    gender: {
        type: [String]
    },
    brand: {
        type: String,
        required: [true, 'A tour must have description'],
        trim: true
    },
    price: Number,
    available_sizes: [Number],
    description: {
        type: String,
        required: [true, 'a tour must have a rating'],
        unique: true,
        trim: true
    },
    image: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;