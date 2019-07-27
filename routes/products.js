const express = require("express");
const router = express.Router();

let products = require("../products");


//products
router.get('/products', (req, res)=>{
    res.json(products)
  })
  
  router.get('/products/:id', (req, res) => {
    let product = products.find(p=>p._id === Number(req.params.id));
    res.json(product)
  })
  
  router.post('/products/', (req, res) => {
    let id = products.length + 1;
    let name = req.body.name;
    let description = req.body.description;
    products.push({name, description, "_id":id, "Product Name":name, "Product desc":description})
    res.json(products);
  })
  

module.exports = router;
