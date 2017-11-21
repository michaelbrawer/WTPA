var express = require('express');
var router = express.Router();
var passport = require('passport');
var itinerariesCtrl = require('../controllers/api/itineraries');
var usersCtrl = require('../controllers/api/users');

router.get('/itineraries', itinerariesCtrl.getAllItineraries);
router.get('/itineraries/:id', itinerariesCtrl.getOneItinerary);
router.get('/users', usersCtrl.getAllUsers);

module.exports = router;