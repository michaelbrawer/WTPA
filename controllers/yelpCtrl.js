module.exports = {
  landing,
  returnSearch,
  decideSearch
};

var yelp = require('yelp-fusion');
var clientId = process.env.YELP_CLIENT_ID;
var clientSecret = process.env.YELP_SECRET;

function returnSearch(req, res, next, offsetVal, limitVal, sortVal) {
  var searchRequest = {
    term: req.body.term,
    location: req.body.location,
    categories: 'restaurants, bars',
    sort_by: sortVal,
    offset: offsetVal,
    limit: limitVal
  };
  //get access token
  yelp.accessToken(clientId, clientSecret).then(response => {
    const client = yelp.client(response.jsonBody.access_token);
    // execute search 
    client.search(searchRequest).then(response => {
      const results = response.jsonBody.businesses;
      var restaurantInfo = [];
      // store results as objects in restaurantInfo array
      for (var i = 0; i < results.length; i++) {
        restaurantInfo.push(results[i]);
      }
      // render index view with new information
      res.render('landing', {
        restaurantInfo,
        user: req.user,
        searchRequest,
        goBack: true,
        goHome: false
      });
    });
  });
}

function decideSearch(req, res, next) {
  if (req.query.random == 'true') {
    var num = Math.floor(Math.random() * (25));
    returnSearch(req, res, next, num, 3, "rating");
  } else {
    returnSearch(req, res, next, 0, 6, "best_match");
  }
}

function landing(req, res, next) {
  user = req.user ? req.user : null;
  restaurantInfo = req.restaurantInfo ? req.restaurantInfo : null;
  searchRequest = req.searchRequest ? req.searchRequest : null;  
  res.render('landing', {
    restaurantInfo,
    user: req.user,
    searchRequest,
    goBack: true,
    goHome: false
  });
}