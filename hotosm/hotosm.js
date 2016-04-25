
var request = require('request');

var projectsURL = 'https://tasks.hotosm.org/projects.json';

exports.getProjects = function getProjects(req, res, next) {
    request(projectsURL).pipe(res);
}
