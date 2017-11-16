var mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    photo: String,
    itinerary: [{type: mongoose.Schema.Types.ObjectId, ref: "Itinerary"}]
});


module.exports = mongoose.model("User", userSchema);