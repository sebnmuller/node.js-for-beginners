var mongoose = require('mongoose'),
  Todo = mongoose.model('todo'),
  controller = {}

controller.index = [
  function(req, res, next) {
    //fn to get all todo items and render a view to display them
    Todo.find({}, function(err, todos) {
      if(err) return next(err)
        res.render('todo/index', {todos:todos})
    })
  }
]

controller.create = [
  function(req, res, next) {
    //fn to validate that the todo list isn't empty
    if(req.body.name){
      next()
    } else {
        res.send(400)
    }
  },
  function(req, res, next) {
    //fn to create the todo list, send back the json of the db object
    Todo.create(req.body, function(err, todo) {
      if(err) return next(err)
      res.redirect('/')
    })
  }
]

controller.update = [
	function(req,res,next) {
		//load todo in question
		Todo.findById(req.param('todoId'),function(err,todo) {
			if(err) return next(err)
			if(!todo) return res.send(404)
			req.todo = todo
			next()
		})
		//validate that the update doesn't have a blank item
	},
	function(req,res,next) {
		//update todo, send back the new json
		for(key in req.body) {
			req.todo[key] = req.body[key]
		}
		req.todo.save(function(err,todo) {
			res.json(todo)
		})
	}
]

controller.delete = [
  function(req, res, next) {
    //remove document in question, send back 201
  }
]

module.exports = controller
