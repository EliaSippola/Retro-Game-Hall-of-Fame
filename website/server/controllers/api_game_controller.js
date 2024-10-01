const Game = require('../models/games');

exports.get = async (req, res) => {

    try {
        const users = await Game.find({});

        res.status(200).json(users).end();
    } catch (e) {
        res.status(500).end();
        console.log('Server error on GET request \n\nerror: ' + e);
    }

}

exports.getOne = async (req, res) => {

    try {
        const id = req.params.id;

        if (id == null) {
            req.status(400).send("No id spedicied");
            return;
        }

        const users = await Game.find({'ID':id});
        res.json(users);

        res.status(200).end();
    } catch (e) {
        res.status(500).end();
        console.log('Server error on GET request \n\nerror: ' + e);
    }
}