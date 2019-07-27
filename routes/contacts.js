const express = require("express");
const router = express.Router();

let contacts = require("../contacts")

//contacts
router.get('/contacts', (req, res)=>{
    res.json(contacts)
  })
  router.get('/contacts/:id', (req, res) => {
    let contact = contacts.find(p=>p._id == Number(req.params.id));
    res.json(contact)
  })
  
  router.post('/contacts/', (req, res) => {
    let id = contacts.length + 1;
    let name = req.body.name;
    let occupation = req.body.occupation;
    let avatar = req.body.avatar;
    contacts.push({"_id":id, "name":name, "occupation":occupation, "avatar":avatar})
    res.json(contacts);
  })

  module.exports = router;