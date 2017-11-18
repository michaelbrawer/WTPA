var User = require('../models/User');
var Itinerary = require('../models/Itinerary');
var Stop = require('../models/Stop')
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
 res.render('users/show', {user: req.user, itineraryStops});
}

function newUser(req, res){
  res.render('users/new', {user: req.user});
}

function addStop(req, res, itin){
  user = req.user
  firstItinerary = itin;
  var newStop = new Stop({
    name: req.body.name,
    location: req.body.location,
    itinerary: firstItinerary.id
  })
  newStop.save(function(err, newStop) {
  })
  Stop.find({itinerary: firstItinerary.id}, function(err, stops) {
    itineraryStops = stops;
    res.render('users/show', {user, itineraryStops})    
  })
}

function checkItinerary(req, res) {
  user = req.user;
  Itinerary.findById(user.itinerary[0], function(err, itin) {
    firstItinerary = itin;
    if (firstItinerary) {
      addStop(req, res, itin);
    }
    else {
      var newItinerary = new Itinerary({
        user: user.id,
      })
      user.save(function(err, user) {
      })
      Itinerary.findById(user.itinerary[0], function(err, itin) {
        addStop(req, res, itin)
      })
    }
  })
}

function removeStop(req, res, id){
  Stop.findByIdAndRemove(id, function(err) {
    res.render({user: req.user, itineraryStops})
  })
}

function create(req, res){

}

function edit(req, res, next){

}

function update(req, res, next){

}
