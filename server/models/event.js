var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var EventSchema = new mongoose.Schema({
	title:String,
	desc: String, 
	eventDate: Date,
});
mongoose.model("Event", EventSchema);