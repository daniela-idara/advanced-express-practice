let express = require("express");
let {connect} = require("./database");
let comments = require("./routes/comments");
let contacts  = require("./routes/contacts");
let products = require("./routes/products");
let vehicles = require("./routes/vehicles");

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(comments);
app.use(contacts);
app.use(products);
app.use(vehicles);

const thePort = 3001;

connect(()=>{
  //start web server
});

app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
