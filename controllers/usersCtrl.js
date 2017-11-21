var User = require('../models/User');
var Stop = require('../models/Stop');
var middleware = require("../middleware/index.js");

module.exports = {
  index: index,
  new: newUser,
  add: addStop,
  create,
  update,
  remove: removeStop,
  edit,
  deleteAll
};

function index(req, res){
  edit = req.query.edit ? req.query.edit : null;
  user = req.user ? req.user : null;
  User.findById(req.params.id, function(err, userPage) {
      Stop.find({user: userPage.id}, null, {sort: "time"}, function(err, stops) {
        res.render('users/show', {user, edit, stops, pageId: req.params.id});
      });     
  });
}

function newUser(req, res){
  res.render('users/new', {user: req.user});
}

function addStop(req, res, itin){
  user = req.user;
  edit = req.query.edit ? req.query.edit : null;  
  var newStop = new Stop({
    name: req.body.name,
    location: req.body.location,
    yelpUrl: req.body.url,
    user: user.id
  });
  newStop.save(function(err, newStop) {
    Stop.find({user: user.id}, null, {sort: 'time'}, function(err, stops) {
      res.render('users/show', {user, edit, stops, pageId: req.params.id});
    });
  });
}

// delete all stops from one user

function deleteAll(req, res){
  user = req.user ? req.user : null;
  User.findById(req.params.id, function(err, userPage) {
    Itinerary.findOne({user: userPage.id}, function(err, itin) {
      Stop.remove({itinerary: itin.id}, function(err, itineraryStops) {
      res.redirect(`/users/${req.params.id}`)
    })      
    })
  })
}

// remove a single stop


function removeStop(req, res){
  Stop.findByIdAndRemove(req.body.stop_id, function(err, doc) {
    res.redirect(`/users/${req.params.id}`);
  });
}

function create(req, res){

}

function edit(req, res, next){

}

function update(req, res, next){

}
