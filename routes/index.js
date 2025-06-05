var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var places = [
    { name: 'Home', rating: 10 },
    { name: 'Grandmas House', rating: 9 },
    { name: 'School', rating: 9 }
  ];
  var myname = "Randy Bellet";

  res.render('index', { title: 'Favorite Places', places: places, myname: myname });

});

module.exports = router;
