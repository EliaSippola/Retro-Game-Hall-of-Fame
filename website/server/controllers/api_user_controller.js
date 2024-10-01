const User = require('../models/user');

exports.get = async (req, res) => {
    
    try {
        const users = await User.find({});

        res.status(200).json(users).end();
    } catch (e) {
        res.status(500).end();
        console.log('Server error on GET request \n\nerror: ' + e);
    }

}