angular.module("eventFactory",[]).factory("EventFactory", function($http){
	var factory = {};
	var events = [];
	var weekDays =["Sun", "Mon", "Tues","Weds","Thurs", "Fri", "Sat"];

	var calInterface = 
	[
		[,,,,,,,],
		[,,,,,,,],
		[,,,,,,,],
		[,,,,,,,],
		[,,,,,,,],
		[,,,,,,,]
	];

	//Today's date
	var date = new Date();
    var d = date.getDate();
    var y = date.getFullYear();
    var m = date.getMonth();
    var dy = date.getDay;
    var firstDay = new Date(y, m, 1);
    var lastDay = new Date(y, m+1, 0).getDate();
    var startIdx = 0;

    //Adding days to calendar depending on weekday //NEED TO REFRACTOR
    if(firstDay.getDay() == 0){
    	calInterface[0][0] = 1;
    	startIdx = 0;
    	for(var i = 0; i<calInterface.length; i++){
    		for(var j = startIdx; j<calInterface[i].length && (i*6+j)<=lastDay; j++){
    			calInterface[i][j] = i*6+j;
    		}
    		startIdx=0;
    	}
    }
    if(firstDay.getDay() == 1){

    	calInterface[0][1] = 1;
    	startIdx = 1;

    	for(var i = 0; i<calInterface.length; i++){
    		for(var j = startIdx; (j<calInterface[i].length) && ((i*6+j)<=lastDay); j++){
    			calInterface[i][j] = i*6+j;
    		}
    		startIdx=0;
    	}
    }
    if(firstDay.getDay() == 2){
    	calInterface[0][2]= 1;
    	startIdx = 2;
    	for(var i = 0; i<calInterface.length; i++){
    		for(var j = startIdx; j<calInterface[i].length && (i*6+j)<=lastDay; j++){
    			calInterface[i][j] = i*6+j ;
    		}
    		startIdx=0;
    	}
    }
    if(firstDay.getDay() == 3){
    	calInterface[0][3]= 1;
    	startIdx = 3;
    	for(var i = 0; i<calInterface.length; i++){
    		for(var j = startIdx; j<calInterface[i].length && (i*6+j)<=lastDay; j++){
    			calInterface[i][j] = i*6+j ;
    		}
    		startIdx=0;
    	}
    }
    if(firstDay.getDay() == 4){
    	calInterface[0][4]= 1;
    	startIdx = 4;
    	for(var i = 0; i<calInterface.length; i++){
    		for(var j = startIdx; j<calInterface[i].length && (i*6+j)<=lastDay; j++){
    			calInterface[i][j] = i*6+j ;
    		}
    		startIdx=0;
    	}
    }
    if(firstDay.getDay() == 5){
    	calInterface[0][5]= 1;
    	startIdx = 5;
    	for(var i = 0; i<calInterface.length; i++){
    		for(var j = startIdx; j<calInterface[i].length && (i*6+j)<=lastDay; j++){
    			calInterface[i][j] = i*6+j ;
    		}
    		startIdx=0;
    	}
    }
    if(firstDay.getDay() == 6){
    	calInterface[0][6]= 1;
    	startIdx = 6;
    	for(var i = 0; i<calInterface.length; i++){
    		for(var j = startIdx; j<calInterface[i].length && (i*6+j)<=lastDay; j++){
    			calInterface[i][j] = i*6+j ;
    		}
    		startIdx=0;
    	}
    }

	factory.create = function(meet, callback){
		console.log("in fact", meet);
		//Need to give each event an id
		events.push(meet);	
		callback();


		// $http.post("/create/", meet).success(function(){
		// 	callback()
		// });
	}
	factory.show = function(meet,callback){
		// $http.get("/event/"+ meet).success(
		// 	function(eventInfo){
		// 		callback(eventInfo)
		// })
	}
	factory.update = function(id, newData,callback){
		console.log(newData);
		for(var i =0; i< events.length; i++){
			if(i == id){
				events[i]= newData;
			}
		}
		callback(events);
		// $http.post("/update/" + eventId).success(function(){
		// 	// callback()
		// })
	}
	factory.index = function(callback){
		console.log(calInterface)
		callback(calInterface, weekDays,date,m+1,y,events);
	}
	return factory;
});