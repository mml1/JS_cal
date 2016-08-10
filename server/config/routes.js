var events = require("./../controllers/events.js");

module.exports = function(app){
	app.get("/create/", function(req, res){
		events.index(req, res);
	});
}