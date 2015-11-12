var express = require('express'),
	app = express(),
	morgan = require('morgan')

app.use(morgan());

app.get("/hello", function(req, res) {
	res.send("hello world");
});

app.get("/goodbye", function(req, res) {
	res.send("goodbye world");
});

// potential requests processed sequentially, this one is ran last as a catch all
app.all('*', function(req, res) {
	res.sendStatus(404);
});

app.listen(9000, function() {
	console.log('Server running on 9000');
});