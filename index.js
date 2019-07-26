let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts  = require("./contacts");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

// Create express routes to get all things
// response.json() the appropriate array

//Create express routes to get one thing
//Add .get() routes for /contacts/:id, /vehicles/:id, /comments/:id, /products/:id
//add a path variable for id
//use the params.id to .find() the item from the appropriate array

//comments
app.get('/comments', (req, res)=>{
  res.json(comments)
})

app.get('/comments/:id', (req, res) => {
  let comment = comments.find(p=>p._id === Number(req.params.id));
  res.json(comment)
})

app.post('/comments/', (req, res) => {
  let id = comments.length + 1;
  let body = req.body.body;
  let postId = req.body.postId;
  comments.push({"_id":id, "body":body, "postId":postId})
  res.json(comments);
})

//contacts
app.get('/contacts', (req, res)=>{
  res.json(contacts)
})
app.get('/contacts/:id', (req, res) => {
  let contact = contacts.find(p=>p._id == Number(req.params.id));
  res.json(contact)
})

app.post('/contacts/', (req, res) => {
  let id = contacts.length + 1;
  let name = req.body.name;
  let occupation = req.body.occupation;
  let avatar = req.body.avatar;
  contacts.push({"_id":id, "name":name, "occupation":occupation, "avatar":avatar})
  res.json(contacts);
})

//vehicles
app.get('/vehicles', (req, res)=>{
  res.json(vehicles)
})

app.get('/vehicles/:id', (req, res) => {
  let vehicle = vehicles.find(p=>p._id === Number(req.params.id));
  res.json(vehicle)
})

app.post('/vehicles/', (req, res) => {
  let id = vehicles.length + 1;
  let year = req.body.year;
  let make = req.body.make;
  let model = req.body.model;
  vehicles.push({year, make, model, "_id":id, "Vehicle Year":year, "Vehicle Make":make, "Vehicle Model":model})
  res.json(vehicles);
})

//products
app.get('/products', (req, res)=>{
  res.json(products)
})

app.get('/products/:id', (req, res) => {
  let product = products.find(p=>p._id === Number(req.params.id));
  res.json(product)
})

app.post('/products/', (req, res) => {
  let id = products.length + 1;
  let name = req.body.name;
  let description = req.body.description;
  products.push({name, description, "_id":id, "Product Name":name, "Product desc":description})
  res.json(products);
})


const thePort = 3001;
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
