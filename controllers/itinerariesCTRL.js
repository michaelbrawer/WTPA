var Itinerary = require('../models/Itinerary');

module.exports = {
  index: index,
  new: newItinerary,
  create: create,
  edit: edit,
  update: update,
  remove: remove
};

function index(req, res){
  res.render('itineraries.show');
}

function newItinerary(req, res){

}

function create(req, res){

}

function edit(req, res, next){

}

function update(req, res, next){

}

function remove(req, res){

}