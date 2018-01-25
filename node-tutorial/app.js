var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
    res.send("Welcome do my new Home Page")
});
app.get('/aboutme', function (req, res) {
    res.send("<h1>My name is Michael. I'm currently learning how to build webapps using NodeJS.</h1>")
});
app.get('/blog/:number', function (req, res) {
    var number = req.params.number;
    res.send("<p>This is Blog " + number + "</p>")
});
app.get('/hello/:number', function (req, res) {
    var number = req.params.number;
    var hellos = "";
    
    for (var i=0; i<number; i++){
        hellos = hellos + "hello ";
    }
    
    res.send(hellos)
});

 
app.listen(8080, function(){
    console.log("server started")
});