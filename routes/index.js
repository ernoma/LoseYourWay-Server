var express = require('express');
var router = express.Router();

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

module.exports = router;
