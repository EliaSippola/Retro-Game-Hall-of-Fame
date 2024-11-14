const Game = require('../models/games');
const User = require('../models/user');

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

exports.updateOne = async (req, res) => {

    const _id = req.body._id;

    const gameId = req.body.gameId;
    const name = req.body.name;
    const description = req.body.description;

    if (!_id || !gameId  || !name || !description) {
        console.log(req.body);
        res.status(400).end();
        return;
    }

    try {

        const user = await User.findOne({"_id":_id});

        if (!user) {
            res.status(403).end();
            return;
        } else if (user.permission_level != 1) {
            res.status(403).end();
            return;
        } else {
            await Game.updateOne({"_id":gameId}, {$set:{"game_name.en":name, "description.en":description}});
            res.status(200).end();
        }

    } catch (e) {
        res.status(500).end();
        console.log("Error on update request (updating game): " + e);
    }

}