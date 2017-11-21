var mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var stopSchema = new Schema({
    name: String,
    time: Number,
    location: String,
    url: String,
    image: String,
    rating: Number,
    itinerary: String,
    time: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model("Stop", stopSchema);