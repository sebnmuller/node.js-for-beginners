var articles = [];

/*
	articles:
		{
			title:"",
			body:"",
			author:"",
			comments:[]
		}
	 
*/

module.exports.create = function(req, res) {
	req.body.comments = [];
	articles.push(req.body);
	res.redirect('articles');
	//console.log(req.body);
	//res.send(req.body);
};

module.exports.index = function(req, res) {
	res.json(articles);
};

// render HTML form to let user create article
module.exports.new = function(req, res) {
	res.send("<form method='post' action='/articles'>\
				<input type='text' placeholder='title' name='title' />\
				<input type='text' placeholder='author' name='author' />\
				<input type='textarea' placeholder='body' name='body' />\
				<button type='submit'>Post</button>\
			</form>");
};