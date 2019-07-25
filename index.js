let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts  = require("./contacts");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.get('/', function (req, res){
  res.json({name: "Daniela", age:32, color:"purple"})
})

// Create express routes to get all things
// response.json() the appropriate array

//Create express routes to get one thing
//Add .get() routes for /contacts/:id, /vehicles/:id, /comments/:id, /products/:id
//add a path variable for id
//use the params.id to .find() the item from the appropriate array

//contacts
app.get('/contacts', (req, res)=>{
  res.json(contacts)
})
app.get('/contacts/:id', (req, res) => {
  let contact = contacts.find(p=>p._id == Number(req.params.id));
  res.json(contact)
})

//vehicles
app.get('/vehicles', (req, res)=>{
  res.json(vehicles)
})

app.get('/vehicles/:id', (req, res) => {
  let vehicle = vehicles.find(p=>p._id === Number(req.params.id));
  res.json(vehicle)
})

//comments
app.get('/comments', (req, res)=>{
  res.json(comments)
})

app.get('/comments/:id', (req, res) => {
  let comment = comments.find(p=>p._id === Number(req.params.id));
  res.json(comment)
})

//products
app.get('/products', (req, res)=>{
  res.json(products)
})

app.get('/products/:id', (req, res) => {
  let product = products.find(p=>p._id === Number(req.params.id));
  res.json(product)
})


const thePort = 3001;
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
