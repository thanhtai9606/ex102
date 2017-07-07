var express = require('express');
var router = express();

router.get('/', function(req, res, next){
   res.render("videortc.ejs", {title: "Video Demo RTC"})
});

module.exports = router;