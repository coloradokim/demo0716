var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/thanks', function(req, res, next) {
  res.send('thanks');
});

router.post('/buckle', function(req, res, next) {
  if(!req.body.ghost) {
    res.render('index', {errors: 'Doh. Ghost is empty!'})
  } else {
    res.redirect('/thanks')
  }
});

module.exports = router;
