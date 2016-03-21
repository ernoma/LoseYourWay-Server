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

    $scope.otherThemeName = "";

    var resetRoute = function() {
	$scope.route = {
            name: "",
            theme: "Architecture and urban design",
            tasks: [
		{ type: "move",
		  instructions: "",
		  routeStep: 1
		}
            ]
	}
    };

    resetRoute();

    $scope.myColor = "#aaa";

    $scope.changedTheme = function(theme) {
	if (theme == "Other") {
	    $scope.myColor = "#000";
	}
	else {
	    $scope.myColor = "#aaa";
	}
    }	    

    //$scope.changedThemeName = function(otherThemeName) {
	//$scope.route.theme = otherThemeName;
    //}

    $scope.addTask = function(type) {
	$scope.route.tasks.push({
	    type: type,
	    instructions: "",
	    routeStep: $scope.route.tasks.length + 1
        });
    }

    $scope.createRoute = function() {
	console.log($scope.route);

	if ($scope.route.theme == "Other" && $scope.otherThemeName != "") {
	    $scope.route.theme = $scope.otherThemeName;
	}

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
