var express = require("express");
var app = express();
var port = process.env.port || 3000

//setup for a route for static files
app.use(express.static(__dirname+"/static"))

app.get('/', function(req,res){
    //res.send("Welcome to Web API!")

    res.sendFile(__dirname+"/static/index.html");
})

app.get('/home', function(req,res){
    res.send("Soon to be the home page of our great website!")
})
  
app.listen(port, function(){
    
    if(port == 3000)
    {
        console.log("Running on localhost 3000")
    }
    console.log("Running on localhost 3000")
})