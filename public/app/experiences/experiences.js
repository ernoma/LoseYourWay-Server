'use strict';

//
// TODO: allow filtering of the results based on date that allows for example showing the
// Mediapolis test results (quickly) if Amsterdam results are not available
// Also try out the imagine route really yourself before Wednesday
// TODO: Photo storing and showing
//

angular.module('myApp.experiences', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/app/experiences', {
    templateUrl: '/app/experiences/experiences.html',
    controller: 'ExperiencesCtrl'
  });
}])

.controller('ExperiencesCtrl', function($scope, Routes, RouteResults) {

    var offlineLayer = L.tileLayer('/images/amsterdam/EPSG_900913_{z}/{x}_{y}.jpeg', {
	tms: true,
	minZoom: 10,
        maxNativeZoom: 16,
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });
    var osmLayer = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    });
    var tonerLayer = L.tileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
	attribution: '<a href="http://maps.stamen.com/">Map tiles</a> by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>, Data &copy; <a href="http://osm.org/copyright">OpenStreetMap contributors</a>'
    });
    var watercolorLayer = L.tileLayer('http://tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
	attribution: '<a href="http://maps.stamen.com/">Map tiles</a> by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>, Data &copy; <a href="http://osm.org/copyright">OpenStreetMap contributors</a>'
    });
    var cycleLayer = L.tileLayer('https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png', {
	attribution: 'Maps &copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, Data &copy; <a href="http://osm.org/copyright">OpenStreetMap contributors</a>'
    });
    var transportLayer = L.tileLayer('https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png', {
	attribution: 'Maps &copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, Data &copy; <a href="http://osm.org/copyright">OpenStreetMap contributors</a>'
    });

    var map = L.map('map', {
	center: [52.3707, 4.9004],
	zoom: 13,
	layers: [osmLayer]
    });

    map.openPopup = function(popup) {
	//        this.closePopup();  // just comment this
	map._popup = popup;
	
	return map.addLayer(popup).fire('popupopen', {
            popup: map._popup
	});
    }

    var baseMaps = {
	"OSM default": osmLayer,
	"Offline": offlineLayer,
	"Black & white": tonerLayer,
	"Watercolor": watercolorLayer,
	"Cycling": cycleLayer,
	"Transport": transportLayer
    };

    L.control.layers(baseMaps).addTo(map);
    //});

    var routeColors = [ "#FF0000",
			"#0000FF",
			"#FF00FF",
			"#00FFFF",
			"#F0F000",
			"#F000F0",
			"#FFF0F0",
			"#F0FFFF",
			"#F0FF00",
			"#FF00FF"
			];

    var routeLines = [];
    var markers = [];

    $scope.routeResults = [];

    $scope.shownRoute = "all";

    var routes = Routes.query();
    var routeResults = {};
    var results = RouteResults.query(function() {
	// Divide results according to route
	for (var i = 0; i < results.length; i++) {
	    if (routeResults[results[i].name] == undefined) {
		routeResults[results[i].name] = [results[i]];
	    }
	    else {
		routeResults[results[i].name].push(results[i]);
	    }
	}
	//console.log(routeResults);

	$.each(routeResults, function(key, routeResultArray) {
	    
	    var avgPoints = 0;
	    var qualitativeQuestionAnswers = [];
	    for (var j = 0; j < routeResultArray.length; j++) {
		avgPoints += routeResultArray[j].quantitativeQuestions[0].value;
		if (routeResultArray[j].qualitativeQuestions[0].answer != "") {
		    qualitativeQuestionAnswers.push(routeResultArray[j].qualitativeQuestions[0].answer);
		}
	    }
	    avgPoints = avgPoints / routeResultArray.length;

	    $scope.routeResults.push({
		routeName: routeResultArray[0].name,
		finishedRoutes: routeResultArray,
		avgPoints: avgPoints,
		qualitativeQuestionAnswers: qualitativeQuestionAnswers
	    });
	});

	console.log($scope.routeResults);

	showRoutes($scope.shownRoute);
    });
    //console.log(results);
    
    $scope.changedShownRoute = function(shownRoute) {
	showRoutes(shownRoute);
    }

    function showRoutes(shownRoute) {
	var index = 0;
		
	//leafletData.getMap().then(function(map) {

	    var goalIcon = L.icon({
		iconUrl: '/images/map/goal.png',
		iconSize: [25, 25],
		iconAnchor: [12, 12]
	    });
	    var startIcon = L.icon({
                iconUrl: '/images/map/start.png',
                iconSize: [20, 20],
                iconAnchor: [10, 10]
            });
	    var wordIcon = L.icon({
                iconUrl: '/images/map/write_icon_selected_small.png',
                iconSize: [25, 25],
                iconAnchor: [12, 12]
            });
	    var moveIcon = L.icon({
                iconUrl: '/images/map/move_icon_selected_small.png',
                iconSize: [25, 25],
                iconAnchor: [12, 12]
            });
	    var photoIcon = L.icon({
                iconUrl: '/images/map/take_photo_icon_selected_small.png',
                iconSize: [25, 25],
                iconAnchor: [12, 12]
            });
	    var photoWordIcon = L.icon({
                iconUrl: '/images/map/write_and_take_photo_icon_selected_small.png',
                iconSize: [25, 25],
                iconAnchor: [12, 12]
            });

	    for (var i = 0; i < routeLines.length; i++) {
		map.removeLayer(routeLines[i]);
	    }
	    for (var i = 0; i < markers.length; i++) {
                map.removeLayer(markers[i]);
            }

	    for (var k = 0; k < $scope.routeResults.length; k++) {
		if (shownRoute == "all" || $scope.routeResults[k].routeName == shownRoute) {
		    var routeResultArray = $scope.routeResults[k].finishedRoutes;

		    for (var i = 0; i < routeResultArray.length; i++) {
			var routeColor = routeColors[index % routeColors.length];

			var latLngs = [];
			for (var j = 0; j < routeResultArray[i].GPSTrace.length; j++) {
			    latLngs.push(L.latLng(routeResultArray[i].GPSTrace[j].lat, routeResultArray[i].GPSTrace[j].lng));
			}
			if (latLngs.length > 0) {
			    //var name = routeResultArray[i].name;
			    var routeLine = L.polyline(latLngs, {color: routeColor});
			    //routeLine.bindPopup('Route: ' + name + '', {
			    //    offset: new L.Point(0, 0)
			    //});
			    routeLine.addTo(map);
			    routeLines.push(routeLine);
			
			    var marker = L.marker(latLngs[0], {icon: startIcon}).addTo(map); // route start
			    markers.push(marker);
			    marker = L.marker(latLngs[latLngs.length-1], {icon: goalIcon}).addTo(map); // route end
			    markers.push(marker);
			}
			index++;

			var tasks = routeResultArray[i].savedTasks;

			for (var m = 0; m < tasks.length; m++) {
			    var stepLatLngs = findRouteStepLatLngs(tasks[m].routeStep, routeResultArray[i]);
			    if (stepLatLngs.length > 0) {
				if (tasks[m].type == "move") {
                                    var marker = L.marker(stepLatLngs[Math.floor((stepLatLngs.length - 1) / 2)], {icon: moveIcon}); // route step with word
                                    marker.bindPopup("<p><b>Instructions</b>:<br>" + tasks[m].instructions + "</p>");
                                    marker.addTo(map);
                                    markers.push(marker);
                                }
				else if (tasks[m].type == "word") {
				    var marker = L.marker(stepLatLngs[Math.floor((stepLatLngs.length - 1) / 2)], {icon: wordIcon}); // route step with word
				    marker.bindPopup("<p><b>Instructions</b>:<br>" + tasks[m].instructions + "</p><p><b>Word</b>:<br>" + tasks[m].word + "</p>");
				    marker.addTo(map);
				    markers.push(marker);
				}
				else if (tasks[m].type == "photo") {
				    var marker = L.marker(stepLatLngs[Math.floor((stepLatLngs.length - 1) / 2)], {icon: photoIcon}); // route step with word
                                    var html = "<p><b>Instructions</b>:<br>" + tasks[m].instructions + "</p>";
				    if (tasks[m].photoURL != "") {
					html += '<p><b>Photo</b>:<br><a href="' + tasks[m].photoURL + '" target="_blank"><img alt="photo" width="100" src="' + tasks[m].photoURL + '"></a></p>';
				    }
				    else {
					html += '<p>Photo missing</p>';
				    }
				    marker.bindPopup(html);
                                    marker.addTo(map);
                                    markers.push(marker);
				}
				else if (tasks[m].type == "photoword") {
                                    var marker = L.marker(stepLatLngs[Math.floor((stepLatLngs.length - 1) / 2)], {icon: photoWordIcon}); // route step with word
                                    html = "<p><b>Instructions</b>:<br>" + tasks[m].instructions + "</p><p><b>Word</b>:<br>" + tasks[m].word + "</p>";
				    if (tasks[m].photoURL != "") {
                                        html += '<p><b>Photo</b>:<br><a href="' + tasks[m].photoURL + '" target="_blank"><img alt="photo" width="100" src="' + tasks[m].photoURL + '"></a></p>';
                                    }
				    else {
                                        html += '<p>Photo missing</p>';
                                    }
                                    marker.bindPopup(html);
                                    marker.addTo(map);
                                    markers.push(marker);
                                }
			    }
			}
		    }
		}
	    }
	//});
    }

    function findRouteStepLatLngs(routeStep, routeResult) {
	var stepLatLngs = [];

	for (var j = 0; j < routeResult.GPSTrace.length; j++) {
	    if (routeResult.GPSTrace[j].routeStep == routeStep) {
		stepLatLngs.push(L.latLng(routeResult.GPSTrace[j].lat, routeResult.GPSTrace[j].lng));
	    }
	}
	return stepLatLngs;
    }
});
