var express = require("express");
var app = express();

app.get('/:name', function(req, res){
    var names = req.params.name;
    res.render('homepage.ejs', {names});
});

app.listen(8080, function(){
    console.log("server started")
});