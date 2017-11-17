var mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var stopSchema = new Schema({
    name: String,
    time: Number,
    location: String,
    image: String,
    rating: Number
});

<<<<<<< HEAD

=======
>>>>>>> 4a9867b4511d760e9aec697683eb82fa482a550d
module.exports = mongoose.model("Stop", stopSchema);