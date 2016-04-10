'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ng-sortable',
  'myApp.view1',
  'myApp.view2',
  'myApp.experiences',
  'myApp.privacy',
  'myApp.version',
  'loseYourWayServer.services'
]).
config(function($logProvider, $routeProvider) {
    $logProvider.debugEnabled(false);
    $routeProvider.otherwise({redirectTo: '/app/view1'});
});
