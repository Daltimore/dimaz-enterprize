//Grab express
var express = require('express');

//Create an express app
var app = express();

//Create an express route for the home page
//http://localhost:500/
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

//Start the server on port 5000
app.listen(5000);

//Send message 
console.log("The server started on port 5000");