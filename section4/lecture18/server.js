var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	basicAuth = require('basic-auth-connect'),
	port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(morgan('combined'))
app.get('/', function(req, res) {
	res.send('home');
});
var auth = basicAuth('admin','admin');

app.get('/about', function(req, res) {
	res.send('about');
});

app.get('/admin', auth, function(req, res) {
	res.send('admin');
});

app.listen(port, function(err) {
	console.log('listening on %s', port);
});