var Itinerary = require('../../models/Itinerary');

function getAllItineraries(req, res){
  Itinerary.find({}, function(err, itins) {
    res.status(200).json(itins);
  })
}

function getOneItinerary(req, res){
  Itinerary.findById(req.params.id, function (err, itin) {
    res.status(200).json(itin);
  })
}

module.exports = {
  getAllItineraries,
  getOneItinerary
};