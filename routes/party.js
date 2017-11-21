var express = require('express');
var router = express.Router();
var passport = require('passport');
var partyCtrl = require('../controllers/partyCtrl');


/* GET users listing. */
router.get('/new', partyCtrl.new);
router.get('/:id', partyCtrl.index);
router.post('/:id', partyCtrl.add);
router.post('/', partyCtrl.create);
router.delete('/all', partyCtrl.deleteAll)
router.delete('/:id', partyCtrl.remove);


module.exports = router;
