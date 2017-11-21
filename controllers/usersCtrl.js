var User = require('../models/User');
var Stop = require('../models/Stop');
var middleware = require("../middleware/index.js");
var firstItinerary;
var itineraryStops;

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
    console.log(userPage.stops)
      Stop.find({}, null, {sort: "time"}, function(err, itineraryStops) {
        res.render('users/show', {user, edit, itineraryStops, pageId: req.params.id});
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
    url: req.body.url,
    itinerary: itin.id
  });
  newStop.save(function(err, newStop) {
    Stop.find({itinerary: itin.id}, null, {sort: 'time'}, function(err, itineraryStops) {
      res.render('users/show', {user, edit, itineraryStops, pageId: req.params.id});
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
