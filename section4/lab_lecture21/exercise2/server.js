var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	userAgent = require('express-useragent'),
	port = process.env.PORT || 8080;

app.use(cookieParser());
app.use(session({
	secret:'bob',
	resave:'false',
	saveUninitialized:'false'
}));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(morgan('combined'));

app.get('/', function(req, res) {
	
	if(req.session.useragent) {
		req.session.number_of_requests += 1;
	}
	else {
		req.session.number_of_requests = 1;
		req.session.useragent = req.headers['user-agent'];
	}

	res.send('<h1>Number of requests: ' + req.session.number_of_requests + '</h1></br>' + req.session.useragent);
});

app.listen(port, function(err) {
	console.log('listening on %s', port);
});