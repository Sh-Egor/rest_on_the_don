var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/rest_on_the_don', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');

  // And insert something like this instead:
  res.sendfile('index.html');
});

module.exports = router;
