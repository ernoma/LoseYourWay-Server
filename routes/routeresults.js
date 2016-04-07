var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var RouteResult = require('../models/RouteResult.js');

/* GET routeresults listing. */
router.get('/', function(req, res, next) {
    RouteResult.find(function (err, routes) {
	if (err) return next(err);
	res.json(routes);
    });
});

router.post('/', function(req, res, next) {
    //console.log(req);
    //console.log(req.body);

    RouteResult.create(req.body, function (err, post) {
	//console.log(err);
	if (err) return next(err);
	//console.log(post);
	res.json(post);
    });
});

router.get('/:id', function(req, res, next) {
  RouteResult.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
