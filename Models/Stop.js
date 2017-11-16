var mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var stopSchema = new Schema({
    name: String,
    time: Number,
    location: String,
    image: String,
    rating: Number
});
//schema goes here

// module.exports = mongoose.model("Stop", stopSchema);