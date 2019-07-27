let products = require("../products");

//get - all products
exports.list = function list(req, res) {
    return res.json(products);
}

//get - one product
exports.show = function list(req, res) {
    let product = products.find(p=>p._id === Number(req.params.id));
    res.json(product)
}

//post
exports.create = function list(req, res) {
    let id = products.length + 1;
    let name = req.body.name;
    let description = req.body.description;
    products.push({name, description, "_id":id, "Product Name":name, "Product desc":description})
    res.json(products);
}

//put
exports.update = function list(req, res) {
    let product = products.find(p=>p._id === Number(req.params.id));
    product.name = body.name;
    product.description = body.description;
    res.json(product)
}

//delete
exports.remove = function list(req, res) {
    let product = products.find(p=>p._id === Number(req.params.id));
    product.isActive = false;
    res.send("deleted");
}