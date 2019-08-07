const mongoose = require('mongoose');

let contactSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    avatar: String
});

let Contact = mongoose.model('Contact', contactSchema);

module.exports =  Contact;