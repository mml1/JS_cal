var mongoose = require("mongoose");
var Event = mongoose.model("Event");

module.exports = (function(){
	return {
		index: function(req, res){
			Event.find({}, function(err, events){
				if(err){
					console.log("db is empty")
				} else {
					res.json(customers);
				}
			});

		}, 
		create: function(req, res){
			var newEvent = new Event(req.body);
			newEvent.save(function(err){
				if(err){
					console.log("could not save")
				} else {
					// console.log("was able to save")
					res.json({});
				}
			})

		}, 
		update: function(req, res){
			
		}

	}
})();