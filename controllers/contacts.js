let ContactModel = require("../models/contacts")

//get - all contacts
exports.list = function list(req, res) {
    ContactModel.find((e,contacts)=>{
        return res.json(contacts);
    });
}

//get - one contact
exports.show = function show(req, res) {
    ContactModel.findById(req.params.id, (err,contacts)=>{
        return res.json(contacts);
    });
}

//post
exports.create = function create(req, res) {
    let newContact = new ContactModel(req.body);
    newContact.save(()=>{
        return res.json(newContact);
    });
}
