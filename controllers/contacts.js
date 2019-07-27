let contacts = require("../contacts");

//get - all contacts
exports.list = function list(req, res) {
    return res.json(contacts);
}

//get - one contact
exports.show = function list(req, res) {
    let contact = contacts.find(p=>p._id === Number(req.params.id));
    res.json(contact)
}

//post
exports.create = function list(req, res) {
    let id = contacts.length + 1;
    let name = req.body.name;
    let occupation = req.body.occupation;
    let avatar = req.body.avatar;
    contacts.push({"_id":id, "name":name, "occupation":occupation, "avatar":avatar})
    res.json(contacts);
}

//put
exports.update = function list(req, res) {
    let contact = contacts.find(p=>p._id === Number(req.params.id));
    contact.name = body.name;
    contact.occupation = body.occupation;
    contact.avatar = body.avatar;
    res.json(contact)
}

//delete
exports.remove = function list(req, res) {
    let contact = contacts.find(p=>p._id === Number(req.params.id));
    contact.isActive = false;
    res.send("deleted");
}