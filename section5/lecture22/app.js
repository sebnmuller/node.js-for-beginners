var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	serveStatic = require('serve-static'),
	port = process.env.PORT || 8080,
	// fake db
	users = [];

// middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(morgan('combined'));

app.post('/users', function(req, res) {
	users.push(req.body);
	res.send(200);
});

app.get('/users', function(req, res) {
	res.json(users);
});

// start server
app.listen(port, function(err) {
	console.log('listening on %s', port);
});