const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User', 
        required: [true, 'The product must belong to a user.']
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product', 
        required: [true, 'The product must be in store.']
    },
    price: {
        type: Number,
        required: [true, 'The product must have a price.']
    },
    orderNo: Number,
    shippedDate: { 
        type: Date,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    paid: {
        type: Boolean, 
        default: true
    }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;