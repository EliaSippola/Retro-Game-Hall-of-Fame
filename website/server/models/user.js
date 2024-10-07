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
    permission_level: {
        type: Number,
        default: 0
    },
    game_access: [String]
});

const User = mong.model('User', userSchema, 'users');

module.exports = User;