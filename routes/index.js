var express = require('express');
var router = express.Router();
var passport = require('passport');
var yelpCtrl = require('./../controllers/yelpCtrl.js');

/* GET home page. */
router.get('/', yelpCtrl.landing);
router.post('/', yelpCtrl.decideSearch);

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

 // Google OAuth callback route
 router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


module.exports = router;
