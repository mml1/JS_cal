angular.module("eventFactory",[]).factory("EventFactory", function($http){
    var factory = {};
    var events = [];
    factory.create = function(eventInfo, callback){
        $http.post("/create/", eventInfo).success(function(){
            callback()
        });
    }
    factory.show = function(id,callback){
        $http.get("/show/" + id).success(
        	function(eventInfo){
        		callback(eventInfo);
        })
    }
    factory.update = function(id, newData, callback){
        console.log(newData, "update", id);
        $http.post("/update/" + id, newData).success(function(message){
            callback();
        })
    }   
    factory.index = function(callback){
        $http.get("/index").success(function(dbInfo){
            callback(dbInfo);
        })
    }
    return factory;
});