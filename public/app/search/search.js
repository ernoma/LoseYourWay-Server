'use strict';

angular.module('myApp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/app/search', {
      templateUrl: '/app/search/search.html',
      controller: 'RouteListCtrl'
  }).when('/app/routes/:routeID', {
      templateUrl: '/app/search/route.html',
      controller: 'RouteDetailCtrl'
  });
}])

.controller('RouteListCtrl', function($scope, Routes) {

    $scope.routes = Routes.query(function() {
	//console.log($scope.routes);
    });

    $scope.orderProp = "name";

})

.controller('RouteDetailCtrl', function($scope, $routeParams, Routes) {

    $scope.route = Routes.get({id: $routeParams.routeID });
});
