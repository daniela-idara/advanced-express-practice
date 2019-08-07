let VehicleModel = require("../models/vehicles")

//get - all vehicles
exports.list = function list(req, res) {
    VehicleModel.find((e,vehicles)=>{
        return res.json(vehicles);
    }); 
}

//get - one vehicle
exports.show = function show(req, res) {
    VehicleModel.findById(req.params.id, (err,vehicles)=>{
        return res.json(vehicles);
    });
}

//post
exports.create = function create(req, res) {
    let newVehicle = new VehicleModel(req.body);
    newVehicle.save(()=>{
        return res.json(newVehicle);
    });
}

