var express = require('express');
var router = express.Router();
var passport = require('passport');
var usersCtrl = require('../controllers/api/users');

router.get('/users', usersCtrl.getAllUsers);

module.exports = router;