const express = require("express");
const router = express.Router();

let comments = require("../comments")

//comments
router.get('/comments', (req, res)=>{
  res.json(comments)
})

router.get('/comments/:id', (req, res) => {
  let comment = comments.find(p=>p._id === Number(req.params.id));
  res.json(comment)
})

router.post('/comments/', (req, res) => {
  let id = comments.length + 1;
  let body = req.body.body;
  let postId = req.body.postId;
  comments.push({"_id":id, "body":body, "postId":postId})
  res.json(comments);
})

module.exports = router;
