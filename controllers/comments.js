let CommentModel = require("../models/comments")

//get - all comments
exports.list =  function list(req, res) {
    CommentModel.find((e,comments)=>{
        return res.json(comments);
    });
 }


//get - one comment
exports.show = function show(req, res) {
    CommentModel.findById(req.params.id, (err,comments)=>{
        return res.json(comments);
    });
}

//post
exports.create =  function create(req, res) {
    let newComment = new CommentModel(req.body);
    newComment.save(()=>{
        return res.json(newComment);
    });
 } 