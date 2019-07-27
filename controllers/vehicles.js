let vehicles = require("../vehicles");


//get - all vehicles
exports.list = function list(req, res) {
    return res.json(vehicles);
}

//get - one vehicle
exports.show = function list(req, res) {
    let vehicle = vehicles.find(p=>p._id === Number(req.params.id));
    res.json(vehicle)
}

//post
exports.create = function list(req, res) {
    let id = vehicles.length + 1;
    let year = req.body.year;
    let make = req.body.make;
    let model = req.body.model;
    vehicles.push({year, make, model, "_id":id, "Vehicle Year":year, "Vehicle Make":make, "Vehicle Model":model})
    res.json(vehicles);
}

//put
exports.update = function list(req, res) {
    let vehicle = vehicles.find(p=>p._id === Number(req.params.id));
    vehicle.year = body.year;
    vehicle.make = body.make;
    vehicle.model = body.model;
    res.json(vehicle)
}

//delete
exports.remove = function list(req, res) {
    let vehicle = vehicles.find(p=>p._id === Number(req.params.id));
    vehicle.isActive = false;
    res.send("deleted");
}

