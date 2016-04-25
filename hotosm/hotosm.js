
var request = require('request');

var projectsURL = 'https://tasks.hotosm.org/projects.json';

var projects = {};

function updateProjects() {
    request(projectsURL, function(error, response, body) {
	if (!error && response.statusCode == 200) {
	    projects = JSON.parse(body);
	} else {
	    // Nothing to do
	}
    });
}

updateProjects();
setInterval(function() {
    updateProjects();
}, 3600 * 24 * 1000); // Daily

exports.getProjects = function getProjects(req, res, next) {
    res.json(projects);
}
