
angular.module('loseYourWayServer.services', ['ngResource'])

.factory('Routes', ['$resource', function($resource){
    return $resource('/routes/:id', null, {
        'update': { method:'PUT' }
    });
}]);
