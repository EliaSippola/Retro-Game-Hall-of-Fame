const exp = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const conn = require('./config/db');
const userApi = require('./routes/api_user_routes');
const gameApi = require('./routes/api_game_routes');
const path = require('path');

const app = exp();
dotenv.config();

conn();
app.use(cors());
app.use(exp.json());
app.use('/api/users', userApi);
app.use('/api/games', gameApi);
app.use('/api/files', exp.static('assets'));

const PORT = process.env.PORT || 3000;

app.get('/api/files', (req, res) => {
    res.status(204).end();
});

app.get("*", (req, res) => {
    res.status(404).end();
});

app.listen(PORT, (e) => {
    if (e) {
        console.log('\x1b[38;5;196m[exp] Could not start server: \x1b[0m' + e);
    } else {
        console.log('\x1b[38;5;2m[exp] Server started succesfully.\x1b[0m');
        console.log('\x1b[38;5;2m[exp] Listening on port ' + PORT + "\x1b[0m");
    }
});