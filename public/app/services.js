
angular.module('loseYourWayServer.services', ['ngResource'])

.factory('Routes', ['$resource', function($resource){
    return $resource('/routes/:id', null, {
        'update': { method:'PUT' }
    });
}])
.factory('RouteResults', ['$resource', function($resource){
    return $resource('/routeresults/:id', null, {
        'update': { method:'PUT' }
    });
}]);
