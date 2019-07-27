const express = require("express");
const router = express.Router();

let vehicles = require("../vehicles");

//vehicles
router.get('/vehicles', (req, res)=>{
    res.json(vehicles)
  })
  
  router.get('/vehicles/:id', (req, res) => {
    let vehicle = vehicles.find(p=>p._id === Number(req.params.id));
    res.json(vehicle)
  })
  
  router.post('/vehicles/', (req, res) => {
    let id = vehicles.length + 1;
    let year = req.body.year;
    let make = req.body.make;
    let model = req.body.model;
    vehicles.push({year, make, model, "_id":id, "Vehicle Year":year, "Vehicle Make":make, "Vehicle Model":model})
    res.json(vehicles);
  })


module.exports = router;
