var mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var itinerarySchema = new Schema({
    user: String,
    date: String,
    stops: [{type: mongoose.Schema.Types.ObjectId, ref: "Stop"}]
});


module.exports = mongoose.model("Itinerary", itinerarySchema);