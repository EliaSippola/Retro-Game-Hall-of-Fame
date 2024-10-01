const mong = require('mongoose');

const userSchema = new mong.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    permissionLevel: {
        type: Number,
        default: 0
    }
});

const User = mong.model('User', userSchema, 'users');

module.exports = User;