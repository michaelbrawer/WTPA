var Itinerary = require('../../models/Itinerary');

function getAllItineraries(req, res){
  Itinerary.find({}, function(err, itins) {
    res.status(200).json(itins);
  })
}

function getOneItinerary(req, res){

}

module.exports = {
  getAllItineraries,
  getOneItinerary
};
