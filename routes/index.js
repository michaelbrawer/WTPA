var express = require('express');
var router = express.Router();
var yelpCtrl = require('./../controllers/yelpCtrl.js')

/* GET home page. */
router.get('/', yelpCtrl.landing);
router.post('/', yelpCtrl.decideSearch);

module.exports = router;
