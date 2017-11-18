var User = require('../models/User');
var Itinerary = require('../models/Itinerary');
var Stop = require('../models/Stop')

module.exports = {
  index: index,
  new: newUser,
  add: addStop,
  create: create,
  edit: edit,
  update: update,
  remove: remove
};

function index(req, res){
 res.render('users/show', {user: req.user});
}

function newUser(req, res){
  res.render('users/new', {user: req.user});
}

function addStop(req, res){
  user = req.user
  var newStop = new Stop({
    name: req.body.name,
    location: req.body.location
  })
  firstItinerary = user.itinerary[0]
  console.log(firstItinerary);
  if (firstItinerary) {
    console.log('working')
    firstItinerary.stops.push(newStop)
  }
  else {
    var newItinerary = new Itinerary({
      user: user.id
    })
    newItinerary.stops.push(newStop)
    user.itinerary.unshift(newItinerary)
    firstItinerary = user.itinerary[0]
  }
  res.render('users/show', {user, firstItinerary})
}

function create(req, res){

}

function edit(req, res, next){

}

function update(req, res, next){

}

function remove(req, res){
  
}