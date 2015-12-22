var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  todoController = require('./controllers.todo')

mongoose.connect('mongodb://localhost/mongooseDemo')

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(morgan('combined'))
app.set('view engine', 'ejs')

app.get('/', todoController.index)
app.post('/', todoController.create)
app.put('/:todoId', todoController.update)
app.del('/:todoId', todoController.delete)

app.listen(port, function(err) {
  console.log('listening on %s', port)
})
