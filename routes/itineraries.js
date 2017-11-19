var express = require('express');
var router = express.Router();
var passport = require('passport');
var itinerariesCtrl = require('../controllers/itinerariesCtrl');


// router.get('/:id', function(req, res){
//   res.render('itineraries/show');
// });

router.get('/new', itinerariesCtrl.new);
router.post('/', itinerariesCtrl.create);
router.get('/:id', itinerariesCtrl.show); 
router.get('/:id/edit', itinerariesCtrl.edit);
router.put('/:id', itinerariesCtrl.update);
router.delete('/:id', itinerariesCtrl.remove);

module.exports = router;