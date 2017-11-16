var Itinerary = require('../models/itinerary');

var Itinerary = require('../models/Itinerary');


function getAllItineraries(req, res){
  res.render('itineraries.show');
}

function getOneItinerary(req, res){

}

module.exports = {
  getAllItineraries,
  getOneItinerary
};
