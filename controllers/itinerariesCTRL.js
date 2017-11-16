var Itinerary = require('../models/Itinerary');

module.exports = {
  show: show,
  new: newItinerary,
  create: create,
  edit: edit,
  update: update,
  remove: remove
};

function show(req, res){
  //show a single itinerary
  res.render('itineraries/show');
}

function newItinerary(req, res){
  //bring down form to create itinerary, do we need?
}

function create(req, res){
  
}

function edit(req, res, next){

}

function update(req, res, next){

}

function remove(req, res){

}