var express = require('express'),
	app = express(),
	articles = require('./controllers/articles'),
	comments = require('./controllers/comments');

//CRUD = Create Read Update Delete

var posts = [];

var notImplemented = function(req, res) {
	res.sendStatus(501);
}

// articles
app.get('/articles', notImplemented); // return all blog posts
app.get('/articles/new', articles.new);
app.get('/articles/:articleId', notImplemented); // return a single post
app.post('/articles', notImplemented); // create a post
app.put('/articles/:articleId', notImplemented); // update a post
app.delete('/articles/:articleId', notImplemented); // delete a post

// comments 
app.post('/articles/:articleId/comments', notImplemented);
app.delete('/articles/:articleId/comments/:commentId', notImplemented);

app.listen(8080);