angular.module("appRoutes",[]).config(function($routeProvider){
	$routeProvider
	.when("/year", {
		templateUrl:"views/year.html"
	})
	.when("/week", {
		templateUrl: "views/week.html"
	})
	.when("/month", {
		templateUrl: "views/month.html"
	})		
	.otherwise({
		templateUrl: "views/home.html"
	})	
});