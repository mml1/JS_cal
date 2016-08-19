angular.module("eventsCtrl",[]).controller("eventsController", function($scope, $routeParams,EventFactory){
	$scope.edit = false;
	$scope.eventDet = {};
	$scope.eventInfo = {}; 
	$scope.events = [];
	$scope.updateEventDet = {}
	
	EventFactory.index(function(info){
		$scope.events = info;
	})
	
	//Create the event
	$scope.createEvent =function(){
		EventFactory.create($scope.eventDet, function(){
			$scope.eventDet = {};
		});
		EventFactory.index(function(info){
			$scope.events = info;
		})

	}
	$scope.updateEvent = function(id){
		console.log($scope.updateEventDet)
		EventFactory.update(id, $scope.updateEventDet, function(message){
			EventFactory.index(function(info){
				$scope.events = info;
			})
		});
		$scope.updateEventDet = {};
		$scope.edit = false;
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