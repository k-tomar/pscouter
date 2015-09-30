var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var router = express.Router();
var mongoose = require ('mongoose');

app.use(express.static(__dirname + '/public')); 	
app.use(morgan('dev')); 					
app.use(bodyParser()); 						
app.use(methodOverride()); 					

/*app.listen(process.env.PORT || 2000)
console.log('Server run on port: %d', process.env.PORT || 2000);*/

// listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");


var url = "mongodb://localhost/userData-test";
mongoose.connect(url, function(err, ff){
	if (err) {
	return console.log(err);
	};
	console.log("Successfull");
});

var routes = require("./app/router.js");
routes(app,router); //call the router.js function
