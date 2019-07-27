const express = require("express");
const router = express.Router();
const {list,show,create} = require("../controllers/comments");


//comments
router.get('/comments', list);
router.get('/comments/:id', show);
router.post('/comments/', create);

module.exports = router;
