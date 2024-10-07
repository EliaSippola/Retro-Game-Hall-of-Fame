const User = require('../models/user');

exports.getAll = async (req, res) => {
    
    const _id = req.body._id;

    if (_id == null) {
        res.status(401).end();
    }

    try {

        const user = await User.findOne({"_id":_id});

        if (user && user.permission_level == 1) {
            const users = await User.find({});

            res.status(200).json(users).end();
        } else {
            res.status(403).end();
        }
    } catch (e) {
        res.status(500).end();
        console.log('Server error on GET request \n\nerror: ' + e);
    }

}

exports.login = async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    if (username == null || password == null) {
        res.status(200).json({
            login: false
        }).end();
    }

    try {
        const user = await User.findOne({ "username":username, "password":password });

        if (user) {
            res.status(200).json({
                _id: user._id,
                username: user.username,
                login: true
            }).end();
        } else {
            res.status(200).json({
                login: false
            });
        }

    } catch (e) {

        res.status(500).end();
        console.log("Error on login request: " + e);

    }

}


// change pass
exports.updatePass = async (req, res) => {

    const username = req.body.username;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

}

exports.updateUser = async (req, res) => {

    const userID = req.body.userID;
    const _id = req.body._id;
    const username = req.body.username;
    const password = req.body.password;
    const permission_level = req.body.password;

}