let ProductModel = require("../models/products");

//get - all products
exports.list = function list(req, res) {
    ProductModel.find((e,products)=>{
        return res.json(products);
     });
}

//get - one product
exports.show = function show(req, res) {
    ProductModel.findById(req.params.id, (err,product)=>{
    res.json(product)
});
}

//post
exports.create = function create(req, res) {
    let newProduct = new ProductModel(req.body);
    newProduct.save(()=>{
        return res.json(newProduct);
    });
}
