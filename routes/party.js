var express = require('express');
var router = express.Router();
var passport = require('passport');
var stopsCtrl = require('../controllers/stopsCtrl');
var usersCtrl = require('../controllers/usersCtrl');

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
} 

/* GET users listing. */
router.get('/new', isLoggedIn, stopsCtrl.new);
router.get('/move', isLoggedIn, stopsCtrl.move);
router.get('/:id/', stopsCtrl.index);
router.post('/comment/:id', isLoggedIn, usersCtrl.createComment);
router.delete('/out/:id', isLoggedIn, usersCtrl.removeComment);
router.post('/:id', isLoggedIn, stopsCtrl.add);
router.post('/', isLoggedIn, stopsCtrl.create);
router.delete('/all', isLoggedIn, stopsCtrl.deleteAll);
router.delete('/:id', isLoggedIn, stopsCtrl.remove);



module.exports = router;
