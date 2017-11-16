var User = require('../models/User');

module.exports = {
  index: index,
  new: newUser,
  create: create,
  edit: edit,
  update: update,
  remove: remove
};

function index(req, res){
 res.render('users/show');
}

function newUser(req, res){
  res.render('users/new');
}

function create(req, res){

}

function edit(req, res, next){

}

function update(req, res, next){

}

function remove(req, res){
  
}