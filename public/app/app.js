'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ng-sortable',
  'myApp.welcome',
  'myApp.getapp',
  'myApp.create',
  'myApp.search',
  'myApp.experiences',
  'myApp.privacy',
  'myApp.version',
  'loseYourWayServer.services'
]).
config(function($logProvider, $routeProvider) {
    $logProvider.debugEnabled(false);
    $routeProvider.otherwise({redirectTo: '/app/welcome'});
});
