var mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var stopSchema = new Schema({
    name: String,
    location: String,
    yelpUrl: String,
});

module.exports = mongoose.model("Stop", stopSchema);