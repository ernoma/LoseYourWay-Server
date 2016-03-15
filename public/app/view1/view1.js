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
		  instructions: "",
		  routeStep: 1
		}
            ]
	}
    };

    resetRoute();

    $scope.addTask = function(type) {
	$scope.route.tasks.push({
	    type: type,
	    instructions: "",
	    routeStep: $scope.route.tasks.length + 1
        });
    }

    $scope.createRoute = function() {
	console.log($scope.route);

	if ($scope.route.name != "") {

	    for (var i = 0; i < $scope.route.tasks.length; i++) {
		$scope.route.tasks[i].routeStep = i + 1;
	    }

	    var route = new Routes($scope.route);
	    route.$save(function(){
		$scope.routes.push(route);
		resetRoute();
	    });
	}
    }
});
