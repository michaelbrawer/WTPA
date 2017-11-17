var express = require('express');
var router = express.Router();
var passport = require('passport');
var usersCtrl = require('../controllers/usersCtrl');

/* GET users listing. */
router.get('/new', usersCtrl.new);
router.get('/:id', usersCtrl.index);
router.post('/', usersCtrl.create);


module.exports = router;
