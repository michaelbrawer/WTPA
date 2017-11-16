module.exports = {
    landing,
    returnSearch
}

var yelp = require('yelp-fusion');
var clientId = process.env.YELP_CLIENT_ID
var clientSecret = process.env.YELP_SECRET
var searchRequest = {};
var restaurantInfo = [];

function returnSearch(req, res, next) {
searchRequest = {
  term: req.body.term,
  location: req.body.location,
  sort_by: 'rating',
  limit: 5
}
//get access token
yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);
  // execute search 
  client.search(searchRequest).then(response => {
    const results = response.jsonBody.businesses;
    restaurantInfo = [];
    // store results as objects in restaurantInfo array
    for (var i = 0; i < 5; i++) {
      restaurantInfo.push(results[i]);
      }
      // render index view with new information
      res.render('landing', {restaurantInfo});
    })
})
}

function landing(req, res, next) {
    res.render('landing', {restaurantInfo});
}