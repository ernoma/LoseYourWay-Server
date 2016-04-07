'use strict';

angular.module('myApp.privacy', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/app/privacy', {
    templateUrl: '/app/privacy/privacy.html'
  });
}]);
