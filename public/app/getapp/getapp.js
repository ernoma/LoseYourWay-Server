'use strict';

angular.module('myApp.getapp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/app/getapp', {
    templateUrl: '/app/getapp/getapp.html'
  });
}]);
