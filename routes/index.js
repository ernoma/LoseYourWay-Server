var express = require('express');
var router = express.Router();
var hotosm = require('../hotosm/hotosm.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sample', function(req, res, next) {
  res.render('sample', { title: 'Sample Postcard' });
});

router.get('/privacy', function(req, res, next) {
  res.render('privacy', { title: 'Privacy Policy' });
});

router.get('/hotosmprojects.json', function(req, res, next) {
    hotosm.getProjects(req, res, next);
});

module.exports = router;
