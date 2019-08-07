
const {getDatabase} = require("../database");
const comments = require('../comments');

//get all comments
exports.list = function list(req,res) {
  let db = getDatabase();
  const collection = db.collection('comments');
  collection.insertMany(comments, function(err, result) {
  // Find some documents
  let found = collection.find({});
  found.toArray(function(err, comments) {
    res.json(comments)
  });
})
}

//get one comment
exports.show = function show(req,res) {
  let db = getDatabase();
  const collection = db.collection('comments');
  // Find some documents
  let id = req.params.id;
  let found = collection.find({_id:id});
  found.toArray(function(err, comment) { 
    res.json(comment)
  });
}
//post new comment
exports.create = function list(req, res) {
  let db = getDatabase();
  const collection = db.collection('comments');
  // Insert some documents
  collection.insertMany([req.body], function(err, result) {
  res.json(comments);
  }); 
}