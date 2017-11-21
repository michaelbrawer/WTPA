var User = require('../../models/User');

function getAllUsers(req, res) {
    User.find({}, function(err, users) {
        res.status(200).json(users);
    });
}

module.exports = {
    getAllUsers
};