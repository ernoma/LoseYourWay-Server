var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Route = require('../models/Route.js');

/* GET routes listing. */
router.get('/', function(req, res, next) {
    Route.find(function (err, routes) {
	if (err) return next(err);
	res.json(routes);
    });
});

router.post('/', function(req, res, next) {
    //console.log(req);
    //console.log(req.body);

    Route.create(req.body, function (err, post) {
	//console.log(err);
	if (err) return next(err);
	//console.log(post);
	res.json(post);
    });
});

router.get('/:id', function(req, res, next) {
  Route.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/*router.put('/:id', function(req, res, next) {
  Route.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});*/


module.exports = router;
