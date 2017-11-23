var User = require('../../models/User');
var Stop = require('../../models/Stop');

function getOneUser (req, res) {
    User.findById(req.params.id, function(err, user) {
        res.status(200).json(user);
    })
}

function getStops(req, res) {
    Stop.find({}, function(err, stops) {
        res.status(200).json(stops);
    });
}

function oneStop(req, res) {
    Stop.findById(req.params.id, function(err, stop) {
        res.status(200).json(stop)
    });
}

module.exports = {
    getOneUser,
    getStops,
    oneStop
};