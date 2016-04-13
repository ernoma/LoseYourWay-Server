'use strict';

angular.module('myApp.welcome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/app/welcome', {
    templateUrl: '/app/welcome/welcome.html'
  });
}]);
