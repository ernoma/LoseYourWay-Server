var mongoose = require('mongoose');

var TaskResultSchema = new mongoose.Schema({
    routeStep: Number,
    photoURL: String,
    word: String
});

var RouteLocationSchema = new mongoose.Schema({
    lat: Number,
    lng: Number,
    routeStep: Number
});

var RouteResultSchema = new mongoose.Schema({
    name: String,
    theme: String,
    routeID: String,
    GPSTrace: [RouteLocationSchema],
    savedTasks: [TaskResultSchema],
    routeSatisfaction: Number,
    appSatisfaction: Number,
    uxSatisfaction: Number,
    suggestions: String,
    saved: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RouteResult', RouteResultSchema);
