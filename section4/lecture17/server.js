var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(morgan('combined'))

app.post('/users', [
	// start creating user
	function(req, res, next) {
		Users.create(req.body, function(err, users) {
			req.user = user;
			res.render('waiting');
			next();
		});
	},
	// resize user thumbnail
	function(req, res, next) {
		console.log("user" in req); // should return true
		resizePhoto('', function(err, thumbnail) {

		});
	},
	// 3rd party API calls
	function(req, res, next) {

	}
]);

app.listen(port, function(err) {
	console.log('listening on %s', port);
})