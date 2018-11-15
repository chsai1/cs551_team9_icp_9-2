var express = require('express');
var router = express.Router();
var request = require('request');
var cors = require('cors');
/* GET home page. */
router.get('/', function(req, res, next) {
  var searchtext = req.query.searchtext;
  var url = "https://api.nutritionix.com/v1_1/search/'+$scope.dish+'?results=0:1&fields=*&appId=50cd56b2&appKey=bb1554e78ba472b88ab75048dd8f2fce";
  request.get(url).pipe(res);
});

module.exports = router;
