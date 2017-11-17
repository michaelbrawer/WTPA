var mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    photo: String,
    googleId: String,
    created: { type: Date, default: Date.now },
    itinerary: [{type: mongoose.Schema.Types.ObjectId, ref: "Itinerary"}]
});

<<<<<<< HEAD

=======
>>>>>>> 4a9867b4511d760e9aec697683eb82fa482a550d
module.exports = mongoose.model("User", userSchema);