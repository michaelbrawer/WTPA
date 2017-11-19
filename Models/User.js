var mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    photo: String,
    googleId: String,
    created: { type: Date, default: Date.now },
    itinerary: [{type: mongoose.Schema.Types.ObjectId, ref: "Itinerary"}],
    comments: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Comment"
        }
     ]
});

module.exports = mongoose.model("User", userSchema);