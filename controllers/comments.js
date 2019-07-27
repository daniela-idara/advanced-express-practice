let comments = require("../comments")

//get - all comments
exports.list = function list(req, res) {
    return res.json(comments);
}

//get - one comment
exports.show = function list(req, res) {
    let comment = comments.find(p=>p._id === Number(req.params.id));
    res.json(comment)
}

//post
exports.create = function list(req, res) {
    let id = comments.length + 1;
    let body = req.body.body;
    let postId = req.body.postId;
    comments.push({"_id":id, "body":body, "postId":postId})
    res.json(comments);
}

//put
exports.update = function list(req, res) {
    let comment = comments.find(p=>p._id === Number(req.params.id));
    comment.body = body.body;
    comment.postId = body.postId;
    res.json(comment)
}

//delete
exports.remove = function list(req, res) {
    let comment = comments.find(p=>p._id === Number(req.params.id));
    comment.isActive = false;
    res.send("deleted");
}