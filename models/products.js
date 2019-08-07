const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name: String,
    description: String,
});

let Product = mongoose.model('Product', productSchema);

module.exports =  Product;
