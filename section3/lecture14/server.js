var express = require('express'),
	app = express(),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
	port = process.env.PORT || 8080,
	mongoose = require('mongoose')

require('./models/todo')
var	todoController = require('./controllers/todo')
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
app.delete('/:todoId', todoController.delete)

app.listen(port, function(err) {
  console.log('listening on %s', port)
})
