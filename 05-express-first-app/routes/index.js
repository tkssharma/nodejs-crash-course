var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const response = {

  }
  res.status(200).json({ 'message' :  response})
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users/detail', function(req, res, next) {
  res.send('detail');
});


module.exports = router;



// Express Routes 
// Express server side rendering 
// express controllers 
// express services 
// MVC 