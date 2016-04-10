var mongoose = require('mongoose');

var TaskResultSchema = new mongoose.Schema({
    routeStep: Number,
    photoURL: String,
    word: String,
    instructions: String,
    type: String
});

var RouteLocationSchema = new mongoose.Schema({
    lat: Number,
    lng: Number,
    routeStep: Number
});

var QuantitativeQuestion = new mongoose.Schema({
    question: String,
    value: Number
});

var QualitativeQuestion = new mongoose.Schema({
    question: String,
    answer: String
});

var RouteResultSchema = new mongoose.Schema({
    name: String,
    theme: String,
    routeID: String,
    GPSTrace: [RouteLocationSchema],
    savedTasks: [TaskResultSchema],
    quantitativeQuestions: [QuantitativeQuestion],
    qualitativeQuestions: [QualitativeQuestion],
    saved: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RouteResult', RouteResultSchema);
