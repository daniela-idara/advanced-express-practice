
const {getDatabase} = require("../database");
const products = require('../products');

//get all products
exports.list = function list(req,res) {
  let db = getDatabase();
  const collection = db.collection('products');
  collection.insertMany(products, function(err, result) {
  // Find some documents
  let found = collection.find({});
  found.toArray(function(err, products) {
    res.json(products)
  });
})
}

//get one product
exports.show = function show(req,res) {
  let db = getDatabase();
  const collection = db.collection('products');
  // Find some documents
  let id = req.params.id;
  let found = collection.find({_id:id});
  found.toArray(function(err, product) { 
    res.json(product)
  });
}
//post new product
exports.create = function list(req, res) {
  let db = getDatabase();
  const collection = db.collection('products');
  // Insert some documents
  collection.insertMany([req.body], function(err, result) {
  res.json(products);
  }); 
}