var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//GET Timestamp
router.get('/:date', function(req,res){
	console.log(1);
	res.render('index');
});

module.exports = router;
