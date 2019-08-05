/* 
* https://github.com/AustinCodingAcademy/express-mongodb
* Create a database somewhere for advanced-express-practice
* Create a new file database.js, implement the code for MongoClient and connect()
* Implement the mongodb client tool into your controllers for list, show, create
* Use insertMany() for create and find() for list and show
* How are your controllers going to get access to const db = client.db("advanced-express-practice");
*/

const MongoClient = require('mongodb').MongoClient;

let db = null;

exports.connect = function(done){
    const url = 'mongodb+srv://daniela-idara:ebRXVvVywtErhDc9@daniela-idara-nnzoe.mongodb.net/test?retryWrites=true';
    const client = new MongoClient(url);

    client.connect(doStuffAfterConnected, { useNewUrlParser: true });

   
    function doStuffAfterConnected(err){
        if(err){
            console.log(err);
            return;
        }
        console.log("Connected successfully to server");
        db = client.db("aca-store");
        if(done){
            done();
        }
    }
}

exports.getDatabase = function() {
    return db;
}
