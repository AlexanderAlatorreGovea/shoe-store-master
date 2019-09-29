//const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
//const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please verify your name']
    },
    emai: {
        type: String,
        required: [true, 'Please provide youre email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    photo: String,
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    password: {
        type: String, 
        required: [true, 'Please provide a password'],
        minlength: 9,
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function(el) {
                return el === this.password
            },
            message: 'Oops the passwords are not the same, please try again'
        }
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
        type: Boolean,
        default: true,
        select: false
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;