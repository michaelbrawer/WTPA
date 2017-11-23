var express = require('express');
var router = express.Router();
var passport = require('passport');
var usersCtrl = require('../controllers/api/users');

router.get('/stops', usersCtrl.getAllStops);
router.get('/users/:id', usersCtrl.getOneUser);
router.get('/stops/:id', usersCtrl.oneStop);
router.get('/users/:id/stops', usersCtrl.getUserStops)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
} 

module.exports = router;