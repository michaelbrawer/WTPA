var express = require('express');
var router = express.Router();
var passport = require('passport');
var usersCtrl = require('../controllers/api/users');

router.get('/users', usersCtrl.getAllUsers);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
} 

module.exports = router;