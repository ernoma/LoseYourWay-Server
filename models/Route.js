var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    type: String,
    instructions: String,
    routeStep: Number
});

var RouteSchema = new mongoose.Schema({
    name: String,
    theme: String,
    tasks: [TaskSchema],
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Route', RouteSchema);
