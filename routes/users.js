var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/usersCtrl');

/* GET users listing. */
router.get('/:id', usersCtrl.index);
router.get('/new', usersCtrl.new);
router.post('/', usersCtrl.create);


module.exports = router;
