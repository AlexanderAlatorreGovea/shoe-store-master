const mongoose = require('mongoose');

const Product = require('./productsModel');

const reviewSchema = new mongoose.Schema(
        {
            review: {
                type: String,
                required: [true, 'Review can not be empty!']
        },
        rating: {
            type: Number,
            min: 1,
            max: 5
        }, 
        createdAt: {
            type: Date,
            default: Date.now
        },
        product: {
            type: mongoose.Schema.ObjectId,
            ref: 'Product',
        },
        User: {
            type: mongoose.Schema.ObjectId,
            ref: 'User', 
            required: [true, 'Review must belong to a user']
        }
    },
    {
      toJSON: { virtuals: true },
      toObject: { virtuals: true }
    }
);

reviewSchema.index({ tour: 1, user: 1 }, { unique: true });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;