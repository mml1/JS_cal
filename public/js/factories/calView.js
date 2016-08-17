angular.module("calViewFactory",[]).factory("calViewFactory", function($http){
    var weekDays =["Sun", "Mon", "Tues","Weds","Thurs", "Fri", "Sat"];

	var calInterface = 
	[
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
    		for(var j = startIdx; j<calInterface[i].length && (i*7+j)<=lastDay; j++){
    			calInterface[i][j] = i*7+j;
    		}
    		startIdx=0;
    	}
    }
    if(firstDay.getDay() == 1){

    	calInterface[0][1] = 1;
    	startIdx = 1;

    	for(var i = 0; i<calInterface.length; i++){
    		for(var j = startIdx; (j<calInterface[i].length) && ((i*7+j)<=lastDay); j++){
    			calInterface[i][j] = { day:(i*7+j), events:[]};
    		}
    		startIdx=0;
    	}
    }
    if(firstDay.getDay() == 2){
    	calInterface[0][2]= 1;
    	startIdx = 2;
    	for(var i = 0; i<calInterface.length; i++){
    		for(var j = startIdx; j<calInterface[i].length && (i*7+j)<=lastDay; j++){
    			calInterface[i][j] = i*7+j ;
    		}
    		startIdx=0;
    	}
    }
    if(firstDay.getDay() == 3){
    	calInterface[0][3]= 1;
    	startIdx = 3;
    	for(var i = 0; i<calInterface.length; i++){
    		for(var j = startIdx; j<calInterface[i].length && (i*7+j)<=lastDay; j++){
    			calInterface[i][j] = i*7+j ;
    		}
    		startIdx=0;
    	}
    }
    if(firstDay.getDay() == 4){
    	calInterface[0][4]= 1;
    	startIdx = 4;
    	for(var i = 0; i<calInterface.length; i++){
    		for(var j = startIdx; j<calInterface[i].length && (i*7+j)<=lastDay; j++){
    			calInterface[i][j] = i*7+j ;
    		}
    		startIdx=0;
    	}
    }
    if(firstDay.getDay() == 5){
    	calInterface[0][5]= 1;
    	startIdx = 5;
    	for(var i = 0; i<calInterface.length; i++){
    		for(var j = startIdx; j<calInterface[i].length && (i*7+j)<=lastDay; j++){
    			calInterface[i][j] = i*7+j ;
    		}
    		startIdx=0;
    	}
    }
    if(firstDay.getDay() == 6){
    	calInterface[0][6]= 1;
    	startIdx = 6;
    	for(var i = 0; i<calInterface.length; i++){
    		for(var j = startIdx; j<calInterface[i].length && (i*7+j)<=lastDay; j++){
    			calInterface[i][j] = i*7+j ;
    		}
    		startIdx=0;
    	}
    }
}