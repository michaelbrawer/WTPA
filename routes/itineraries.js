var express = require('express');
var router = express.Router();
var itinerariesCtrl = require('../controllers/itinerariesCtrl');

router.get('/', itinerariesCtrl.index); 
router.get('/new', itinerariesCtrl.new);
router.post('/', itinerariesCtrl.create);
router.get('/:id/edit', itinerariessCtrl.edit);
router.put('/:id', itinerariesCtrl.update);
router.delete('/:id', itinerariesCtrl.remove);

module.exports = router;