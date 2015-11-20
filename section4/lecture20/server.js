var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	bcrypt = require('bcrypt'),
	port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(morgan('combined'));

// Render form that allows user to enter a string
app.get('/enterText', function(req, res) {
	res.send('<h1>Enter Text</h1><form method="POST" action="/enterText"><input name="txt"><button type="submit">Submit</button></form>');
});

app.post('/enterText', function(req, res, next) {
	bcrypt.genSalt(10, function(err, salt) {
		if(err) return next(err);
		bcrypt.hash(req.body.txt, salt, function(err, hash) {
			secureStore = hash;
			res.redirect('/compareText');
			});
	});
	//res.send(req.body.txt);
});

// Render form that allows user to enter a string
app.get('/compareText', function(req, res) {
	res.send('<h1>Compare Text</h1><form method="POST" action="/compareText"><input name="txt"><button type="submit">Submit</button></form>');
});

// Compares object in reg.body against stored hashed/salted string
app.post('/compareText', function(req, res, next) {
	bcrypt.compare(req.body.txt, secureStore, function(err, match) {
		res.send(match);
	});
	//res.send(req.body.txt);
});


app.listen(port, function(err) {
	console.log('listening on %s', port);
});