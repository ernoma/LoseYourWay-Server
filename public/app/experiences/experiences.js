'use strict';

angular.module('myApp.experiences', ['ngRoute', 'leaflet-directive'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/app/experiences', {
    templateUrl: '/app/experiences/experiences.html',
    controller: 'ExperiencesCtrl'
  });
}])

.controller('ExperiencesCtrl', function($scope, Routes, RouteResults, leafletData) {

    var routeColors = [ "#FF0000",
			"#0000FF",
			"#FFFF00",
			"#FF00FF",
			"#00FFFF",
			"#F0F0F0",
			"#0F0F0F",
			"#F0F000",
			"#F000F0",
			"#FFF0F0",
			"#F0FFFF",
			"#F0FF00",
			"#FF00FF"
			];

    var routeLines = [];

    $scope.routeResults = [];

    var routes = Routes.query();
    var routeResults = {};
    var results = RouteResults.query(function() {
	// Divide results according to route
	for (var i = 0; i < results.length; i++) {
	    if (routeResults[results[i].routeID] == undefined) {
		routeResults[results[i].routeID] = [results[i]];
	    }
	    else {
		routeResults[results[i].routeID].push(results[i]);
	    }
	}
	console.log(routeResults);

	leafletData.getMap().then(function(map) {
	    for (var i = 0; i < routeLines.length; i++) {
		map.removeLayer(routeLines[i]);
	    }

	    var index = 0;

	    $.each(routeResults, function(routeID, routeResultArray) {

		$scope.routeResults.push({
		    routeName: routeResultArray[0].name,
		    finishedRoutes: routeResultArray
		});

		var routeColor = routeColors[index % routeColors.length];
		
		for (var i = 0; i < routeResultArray.length; i++) {
		    var latLngs = [];
		    for (var j = 0; j < routeResultArray[i].GPSTrace.length; j++) {
			latLngs.push(L.latLng(routeResultArray[i].GPSTrace[j].lat, routeResultArray[i].GPSTrace[j].lng));
		    }
		    var name = routeResultArray[i].name;
		    var routeLine = L.polyline(latLngs, {color: routeColor});
		    routeLine.bindPopup('Route: ' + name + '', {
			offset: new L.Point(0, 0)
		    });
		    routeLine.addTo(map);
		    routeLines.push(routeLine);
		}
		
		index++;
	    });
	});
    });
    console.log(results);

    angular.extend($scope, {
        amsterdam: {
            lat: 52.3707,
            lng: 4.9004,
            zoom: 13
        },
	mediapolis: {
	    lat: 61.50666,
	    lng: 23.64866,
	    zoom: 12
	}
    });
    
});
