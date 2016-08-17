var mongoose = require("mongoose");
var Event = mongoose.model("Event");

module.exports = (function(){
	return {
		index: function(req, res){
			console.log("here")
			Event.find({}, function(err, eventsInfo){
				if(err){
					console.log("db is empty")
				} else {
					console.log(eventsInfo)
					res.json(eventsInfo);
				}
			});

		}, 
		show: function(req, res){
			console.log("here")
			Event.findOne({_id:req.params.id}, function(err, eventsInfo){
				if(err){
					console.log("db is empty")
				} else {
					console.log(eventsInfo)
					res.json(eventsInfo);
				}
			});

		},
		create: function(req, res){
			var newEvent = new Event(req.body);
			console.log("saving")
			newEvent.save(function(err){
				if(err){
					console.log("could not save")
				} else {
					res.json({});
				}
			})

		}, 
		update: function(req, res){
			
		}

	}
})();