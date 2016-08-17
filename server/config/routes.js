var events = require("./../controllers/events.js");

module.exports = function(app){
	app.get("/index", function(req, res){
		console.log("in route")
		events.index(req, res);
	});
	app.get("/show/:id", function(req, res){
		console.log("in route")
		events.show(req, res);
	});
	app.post("/create/", function(req, res){
		events.create(req, res);
	});
	app.post("/update/:id", function(req, res){
		events.update(req, res);
	});
}