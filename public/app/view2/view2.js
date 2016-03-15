'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/app/view2', {
    templateUrl: '/app/view2/view2.html',
    controller: 'RouteListCtrl'
  });
}])

.controller('RouteListCtrl', function($scope, Routes) {

    $scope.routes = Routes.query();

    $scope.orderProp = "name";

});
