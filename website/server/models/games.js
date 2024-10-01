const mong = require('mongoose');

const gameSchema = new mong.Schema({
    ID: {
        type: Number,
        require: true
    },
    game_image: String,
    game_name: {
        type: Map,
        of: String
    },
    description: {
        type: Map,
        of: String
    },
    maker: String,
    genre: [String],
    publisher: String,
    launched_year: Number,
    original_platforms: [String],
    added_to_hall_of_fame: String,
    hall_of_fame: [{
        username: {
            type: String,
            require: true
        },
        score: {
            type: Number,
            require: true
        },
        date_time: {
            type: String,
            require: true
        }
    }]
});

const Game = mong.model('Games', gameSchema, 'games');

module.exports = Game;