var User = require('../models/User');
var Itinerary = require('../models/Itinerary');
var Stop = require('../models/Stop');
var Comment = require('../models/Comment');
var middleware = require("../middleware/index.js");
var firstItinerary;
var itineraryStops;

module.exports = {
  index: index,
  new: newUser,
  add: addStop,
  checkItinerary,
  create,
  update,
  remove: removeStop,
  edit
};

function index(req, res){
  edit = req.query.edit ? req.query.edit : null;
  user = req.user ? req.user : null;
  User.findById(req.params.id, function(err, userPage) {
    console.log(userPage);
    Itinerary.findOne({user: userPage.id}, function(err, itin) {
      Stop.find({itinerary: itin.id}, null, {sort: "time"}, function(err, itineraryStops) {
        res.render('users/show', {user, edit, itineraryStops, pageId: req.params.id});
      });     
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


function checkItinerary(req, res) {
  user = req.user;
  Itinerary.findOne({user: user.id}, function(err, itin) {
    // firstItinerary = itin;
    if (itin) {
      addStop(req, res, itin);
    }
    else {
      var newItinerary = new Itinerary({
        user: user.id,
      });
      newItinerary.save(function(err, newItinerary) {
        user.save(function(err, user) {
          Itinerary.findOne({user: user.id}, function(err, itin) {
            addStop(req, res, itin);
          });
        });
      });
    }
  });
}

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
