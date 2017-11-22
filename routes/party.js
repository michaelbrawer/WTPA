var express = require('express');
var router = express.Router();
var passport = require('passport');
var stopsCtrl = require('../controllers/stopsCtrl');


/* GET users listing. */
router.get('/new', stopsCtrl.new);
router.get('/move', stopsCtrl.move)
router.get('/:id/', stopsCtrl.index);
router.post('/:id', stopsCtrl.add);
router.post('/', stopsCtrl.create);
router.delete('/all', stopsCtrl.deleteAll)
router.delete('/:id', stopsCtrl.remove);


module.exports = router;
