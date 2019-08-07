let express = require("express");
let comments = require("./routes/comments");
let contacts  = require("./routes/contacts");
let products = require("./routes/products");
let vehicles = require("./routes/vehicles");

const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(comments);
app.use(contacts);
app.use(products);
app.use(vehicles);

mongoose.connect('mongodb+srv://daniela-idara:ebRXVvVywtErhDc9@daniela-idara-nnzoe.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Success!");
});

const thePort = 3001;
app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
