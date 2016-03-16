'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/app/view2', {
      templateUrl: '/app/view2/view2.html',
      controller: 'RouteListCtrl'
  }).when('/app/routes/:routeID', {
      templateUrl: '/app/view2/route.html',
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
