angular.module("eventsCtrl",[]).controller("eventsController", function($scope, $routeParams,EventFactory){
	$scope.cal = [];
	$scope.days;
	$scope.month;
	// $scope.add = false;
	$scope.edit = false;
	$scope.eventDet = {};
	$scope.eventInfo = {}; 
	$scope.events = [];
	$scope.sel;
	
	// Make the calendar
	EventFactory.index(function(info){
		$scope.events = info;
	})
	// select the date
	// $scope.sel =function(id){
	// 	console.log(id,"controller")
	// 	$scope.add = true;
	// 	$scope.sel = id;
	// 	$scope.selectedDate = $scope.month + "/" + $scope.sel.day 
	// }

	//Create the event
	$scope.createEvent =function(){
		console.log("in controller")
		EventFactory.create($scope.eventDet, function(){
			$scope.eventDet = {};
		});

	}
	
	$scope.updateEvent = function(id){
		console.log($scope.eventDet)
		EventFactory.update(id, $scope.eventDet, function(events){
			$scope.events = events;
		});
		$scope.eventDet = {};

	}
	$scope.editEvent = function(id){
		$scope.id = id;
		$scope.edit = true;

		console.log(id);
		//Get event info
		EventFactory.show(id,function(info){
			$scope.eventInfo = info;
		} )

	}

});