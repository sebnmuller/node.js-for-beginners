// connect to mongodb
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://127.0.0.1:27017/myExample', function(err, db) {
  if(err) error_function(err);
  console.log('connected');
  // insert document (row) into collection (table)
  var collection = db.collection('users');
  collection.insert({name:'seb'}, function(err, docs) {
    if(err) error_function(err);
    console.log(docs);
    // query that collection
    collection.find().toArray(function(err, users) {
      if(err) error_function(err);
      console.log(users);
    });
  });
});

function error_function(err) {
  return console.log(err)
}
