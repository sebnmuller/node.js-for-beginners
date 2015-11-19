var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	cookieParser = require('cookie-parser'),
	session = require('express-session')
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
	var response = "<form method ='post' action='/'><input name='remember'><button type='submit'>Submit</button></form>";
	
	if(req.session.remember) {
		response += "<h1>" + req.session.remember + "</h1";
	}
	else response += "<h1>Remember not set in session</h1";

	res.send(response);
});

app.post('/', function(req, res) {
	//console.log(req.body.remember);
	if(req.body.remember) {
		req.session.remember = req.body.remember;
	}
	res.redirect('/');
});


app.listen(port, function(err) {
	console.log('listening on %s', port);
});