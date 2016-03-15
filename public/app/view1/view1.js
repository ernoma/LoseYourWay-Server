'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/app/view1', {
    templateUrl: '/app/view1/view1.html',
    controller: 'RouteAddCtrl'
  });
}])

.controller('RouteAddCtrl', function($scope, Routes) {

    $scope.routes = Routes.query();

    var resetRoute = function() {
	$scope.route = {
            name: "",
            theme: "City",
            tasks: [
		{ type: "move",
		  instructions: ""
		}
            ]
	}
    };

    resetRoute();

    $scope.addTask = function(type) {
	$scope.route.tasks.push({
	    type: type,
	    instructions: ""
        });
    }

    $scope.createRoute = function() {
	console.log($scope.route);

	if ($scope.route.name != "") {
	    var route = new Routes($scope.route);
	    route.$save(function(){
		$scope.routes.push(route);
		resetRoute();
	    });
	}
    }


});
