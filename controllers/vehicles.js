
const {getDatabase} = require("../database");
const vehicles = require('../vehicles');

//get all vehicles
exports.list = function list(req,res) {
  let db = getDatabase();
  const collection = db.collection('vehicles');
  collection.insertMany(vehicles, function(err, result) {
  // Find some documents
  let found = collection.find({});
  found.toArray(function(err, vehicles) {
    res.json(vehicles)
  });
})
}

//get one vehicle
exports.show = function show(req,res) {
  let db = getDatabase();
  const collection = db.collection('vehicles');
  // Find some documents
  let id = req.params.id;
  let found = collection.find({_id:id});
  found.toArray(function(err, vehicle) { 
    res.json(vehicle)
  });
}
//post new vehicle
exports.create = function list(req, res) {
  let db = getDatabase();
  const collection = db.collection('vehicles');
  // Insert some documents
  collection.insertMany([req.body], function(err, result) {
  res.json(vehicles);
  }); 
}