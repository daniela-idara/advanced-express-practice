const mongoose = require('mongoose');

let vehicleSchema = new mongoose.Schema({
    year: String,
    make: String,
    model: String
});

let Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports =  Vehicle;