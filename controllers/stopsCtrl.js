var User = require('../models/User');
var Stop = require('../models/Stop');

module.exports = {
  index,
  add: addStop,
  remove: removeStop,
  deleteAll: removeAllStops,
  move,
};

function index(req, res) {
  user = req.user ? req.user : null;
  User.findById(req.params.id).populate('stops').exec(function(err, userPage) {
    res.render('party/show', {
      user,
      userPage,
      stops: userPage.stops,
      pageId: req.params.id,
      goBack: false,
      goHome: true
    });
  });
}

function addStop(req, res, itin) {
  user = req.user;
  userPage = user;
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
        res.render('party/show', {
          user,
          userPage,
          stops: user.stops,
          pageId: req.params.id,
          goBack: false,
          goHome: true
        });
      });
    });
  });
}

// remove a single stop

function removeStop(req, res) {
  Stop.findByIdAndRemove(req.body.stop_id, function(err, doc) {
    res.redirect(`/party/${req.user._id}`);
  });
}

// delete all stops from one user

function removeAllStops(req, res) {
  req.user.stops = [];
  req.user.save(function(err) {
    res.redirect(`/party/${req.user._id}`);
  });
}

// moves stop order in user.stops array

function move(req, res) {
  var idx = req.user.stops.indexOf(req.query.id);
  var temp = req.user.stops.splice(idx, 1)[0];
  if (req.query.dir === 'u') {
    req.user.stops.splice(idx - 1, 0, temp);
  } else if (req.query.dir === 'd') {
    req.user.stops.splice(idx + 1, 0, temp);
  }
  function renderStop(){req.user.save(function(err) {
    res.redirect(`/party/${req.user._id}`);
  });}
  renderStop();
}
