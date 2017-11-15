var mongoose = require('mongoose');

var Schema = mongoose.Schema; 

//schema goes here

module.exports = mongoose.model("User", userSchema);