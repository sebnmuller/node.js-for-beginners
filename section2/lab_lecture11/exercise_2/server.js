var express = require('express'),
	app = express();

var quotes = [
	'quote1',
	'quote2',
	'quote3',
	'quote4'
];

app.get('/quotes', function(req, res) {
	var quote = quotes[Math.floor(Math.random() * quotes.length)];
	res.json(quote);
});

app.listen(8080);