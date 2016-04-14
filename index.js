var bodyParser = require('body-parser')
var express = require('express');
var app = express();

// Allow CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Support JSON-encoded bodies
app.use( bodyParser.json() );  

// Default 'home' route
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Post route with 5s processing
app.post('/sleep-for-5s', function(req, res){
	console.log(req.body);
	console.log('Start processing ... ');
	setTimeout(function(){
		console.log('Processing done!');
		res.status(200).send('Request completed!');
	}, 3000);
});

// Post route with 5s processing
app.post('/sleep-for-5s-and-fail', function(req, res){
	console.log('Start processing ... ');
	setTimeout(function(){
		console.log('Processing done!');
		res.status(500).send('Error occured');
	}, 5000);
});

app.listen(4004, function () {
  console.log('Example app listening on port 4004!');
});