var express = require("express");
var app = express();
var path = require("path");

var bodyParser = require("body-parser");
app.use(bodyParser.json());

//set static files
app.use(express.static(path.join(__dirname, "./public/")));

//set routes
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

//listening
app.listen(8000, function(){
	console.log("Listening to events on 8000");
});