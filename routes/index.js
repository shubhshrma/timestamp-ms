var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//GET Timestamp
router.get('/:date', function(req,res){
	var date = req.params.date;

    var months = ["January", "February", "March", "April", "May", "June", "July", 
    "August", "September", "October", "November", "December"];
	
	if(isNaN(date)){
       var parsed = Date.parse(date);
       
       if(parsed){
       	  var date_obj=new Date(parsed);
       	  var naturalDate=date_obj.getDate()+" "+months[date_obj.getMonth()]+", "+date_obj.getFullYear();
       	  var unixDate=date_obj.getTime()/1000;
       }
       else{
           var naturalDate=null;
           var unixDate=null;
       }
	}
	else{
		var date_obj=new Date(1000*date);
       	var naturalDate=date_obj.getDate()+" "+months[date_obj.getMonth()]+", "+date_obj.getFullYear();

        var unixDate=date_obj.getTime()/1000;
		 
	}
	res.json({naturalDate:naturalDate,unixDate:unixDate});
	
});

module.exports = router;
