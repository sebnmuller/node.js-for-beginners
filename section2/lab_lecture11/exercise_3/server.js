var express = require('express'),
	app = express();

app.set('view engine', 'ejs');
app.listen(8080);

var list = [1,2,3,4];

app.get('/list', function(req, res) {
	res.render('list', {list:list});
});