var mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var commentSchema = new Schema({
    text: String,
    name: String
},
    {timestamps: true}
);

var userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    googleId: String,
    stops: [{type: mongoose.Schema.Types.ObjectId, ref: "Stop"}],
    comments: [commentSchema]
});


module.exports = mongoose.model("User", userSchema);