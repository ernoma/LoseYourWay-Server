'use strict';

angular.module('myApp.create', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/app/create', {
    templateUrl: '/app/create/create.html',
    controller: 'RouteAddCtrl'
  });
}])

.controller('RouteAddCtrl', function($scope, $location, Routes) {

    $scope.routes = Routes.query();

    $scope.otherThemeName = "";

    //$scope.routeAddForm = {};

    var resetRoute = function() {
	//console.log($scope);
	if ($scope.routeAddForm != undefined) {
	    $scope.routeAddForm.$setUntouched();
	}
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
	$scope.otherThemeName = "";
    };

    resetRoute();

    $scope.myColor = "#a0beb7";

    $scope.changedTheme = function(theme) {
	if (theme == "Other") {
	    $scope.myColor = "#4bbea1";
	}
	else {
	    $scope.myColor = "#a0beb7";
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

    $scope.deleteTask = function(task) {
	for (var i = 0; i < $scope.route.tasks.length; i++) {
	    if ($scope.route.tasks[i].routeStep == task.routeStep) {
		$scope.route.tasks.splice(i, 1);
		break;
	    }
	}
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
		$location.url('/app/search');
	    });
	}
    }
});
