angular.module("eventsCtrl",[]).controller("eventsController", function($scope, $routeParams,EventFactory){
	$scope.cal = [];
	$scope.days;
	$scope.month;
	$scope.add = false;
	$scope.edit = false;
	$scope.eventDet = {};
	$scope.eventInfo = {}; 
	$scope.events = [];
	$scope.sel;
	
	// Make the calendar
	EventFactory.index(function(info,days,date,m,y,e){
		// console.log(info, "f∂")
		$scope.cal = info;
		$scope.days = days;
		$scope.month = m;
		$scope.today = date;
		$scope.year = y;
		$scope.events = e;
	})
	// select the date
	$scope.sel =function(id){
		console.log(id,"controller")
		$scope.add = true;
		$scope.sel = id;
		$scope.selectedDate = $scope.month + "/" + $scope.sel.day 
	}

	//Create the event
	$scope.createEvent =function(){
		// console.log($scope.eventDet, "test")
		EventFactory.create($scope.eventDet, function(){
			$scope.eventDet = {}
			$scope.add=false;
		} )

	}
	
	$scope.updateEvent = function(id){
		console.log($scope.eventDet)
		EventFactory.update(id, $scope.eventDet, function(events){
			$scope.events = events;
		});
		$scope.eventDet = {};
		$scope.edit = false;

	}
	$scope.editEvent = function(id){
		$scope.edit = true;
		$scope.id = id;
		
		//Get event info
		EventFactory.show(id,function(info){
			$scope.eventInfo = info;
		} )

	}

	/* TO DO
		-why is clicking on another event broken now?
		-display the events on the calendar
		-use backend server to save events
		-put arrows to go through other months
	*/

});