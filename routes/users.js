var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('./users/show');
});

router.get('/new', function(req, res, next){
res.render('./users/new');
});

router.get('/new')
module.exports = router;
