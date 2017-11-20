var express = require('express');
var router = express.Router();
var passport = require('passport');
var itinerariesCtrl = require('../controllers/api/itineraries');

router.get('/', itinerariesCtrl.getAllItineraries);
router.get('/:id', itinerariesCtrl.getOneItinerary);

module.exports = router;
