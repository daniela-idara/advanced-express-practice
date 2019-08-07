
const {getDatabase} = require("../database");
const contacts = require('../contacts');

//get all contacts
exports.list = function list(req,res) {
  let db = getDatabase();
  const collection = db.collection('contacts');
  collection.insertMany(contacts, function(err, result) {
  // Find some documents
  let found = collection.find({});
  found.toArray(function(err, contacts) {
    res.json(contacts)
  });
})
}

//get one contact
exports.show = function show(req,res) {
  let db = getDatabase();
  const collection = db.collection('contacts');
  // Find some documents
  let id = req.params.id;
  let found = collection.find({_id:id});
  found.toArray(function(err, contact) { 
    res.json(contact)
  });
}
//post new contact
exports.create = function list(req, res) {
  let db = getDatabase();
  const collection = db.collection('contacts');
  // Insert some documents
  collection.insertMany([req.body], function(err, result) {
  res.json(contacts);
  }); 
}