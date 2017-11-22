var User = require('../models/User');
var Stop = require('../models/Stop');

module.exports = {
  index: index,
  new: newUser,
  add: addStop,
  create,
  update,
  remove: removeStop,
  deleteAll: removeAllStops,
  edit,
  move
  // deleteAll
};

function index(req, res){
  edit = req.query.edit ? req.query.edit : null;
  user = req.user ? req.user : null;
  User.findById(req.params.id).populate('stops').exec(function(err, userPage) {
      res.render('party/show', {user: user, userPage, stops: userPage.stops, pageId: req.params.id, goBack: false});
  });
}

function newUser(req, res){
  res.render('party/new', {user: req.user});
}

function addStop(req, res, itin){
  user = req.user;
  userPage = user;
  edit = req.query.edit ? req.query.edit : null;  
  var newStop = new Stop({
    name: req.body.name,
    location: req.body.location,
    yelpUrl: req.body.url,
    user: user._id
  });
  newStop.save(function(err, newStop) {
    req.user.stops.push(newStop);
    req.user.save(function(err) {
      req.user.populate('stops', function(err) {
        res.render('party/show', {user, userPage, stops: req.user.stops, pageId: req.params.id, goBack: false});
      });
    });
  });
}

// remove a single stop

function removeStop(req, res){
  Stop.findByIdAndRemove(req.body.stop_id, function(err, doc) {
    res.redirect(`/party/${req.user._id}`);
  });
}

// delete all stops from one user

function removeAllStops(req, res){
  req.user.stops = [];
  req.user.save(function(err) {
    res.redirect(`/party/${req.user._id}`);
  });
}

function move(req, res) {
  var idx = req.user.stops.indexOf(req.query.id);
  var temp = req.user.stops.splice(idx, 1)[0];
  if (req.query.dir === 'u') {
    req.user.stops.splice(idx-1, 0, temp);
  }
  else if (req.query.dir === 'd') {
    req.user.stops.splice(idx+1, 0, temp);
  }
  req.user.save(function(err) {
    res.redirect(`/party/${req.user._id}`);
  });
}


function create(req, res){

}

function edit(req, res, next){

}

function update(req, res, next){

}
