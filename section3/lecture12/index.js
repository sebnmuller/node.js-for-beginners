// connect to mongodb
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/myExample', function(err, db) {
  if(err) return console.log(err);
  console.log('connected');
  // insert document (row) into collection (table)
  //var collection = db.collection('users');
  //collection.insert({name:'seb'})
});

// query that collection
