var express = require('express'),
  app=express(),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  port = process.env.PORT || 8080,
  mongodb = require('mongodb'),
  MongoClient = mongodb.MongoClient

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')

MongoClient.connect('mongodb://localhost:27017/myExample', function(err, db) {
  if(err) throw err

  var collection = db.collection('members')

  var index = function(req, res) {
    /* render the index view and pass it to members */
    collection.find().toArray(function(err, members) {
      if(err) return err
      res.render('index', {members:members})
    })
  }

  var addMember = function(req, res) {
    collection.insert(req.body, function(err, docs) {
      if(err) console.log(err)
      console.log(docs)
      res.redirect('/members')
    })
  }

  var deleteMember = function(req, res) {
    console.log(req.query)
    collection.remove( {
      '_id': new mongodb.ObjectID(req.query.member),
      function(err, results) {
        if(err) return console.log(err)
        console.log(results)
        res.redirect('/members')
      }
    })
    res.redirect('/members')
  }

  app.get('/members', index) //list all members
  app.post('/members', addMember) //add a new member
  app.get('/delete', deleteMember) //remove an existing member

  app.listen(port, function(err) {
    console.log('listening on %s', port);
  })

})
