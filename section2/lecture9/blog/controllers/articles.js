/*
	articles:
		{
			title:"",
			body:"",
			author:"",
			comments:[]
		}
	 
*/


module.exports.create = function(req, res) {};

// render HTML form to let user create article
module.exports.new = function(req, res) {
	res.send("<form method='post' action='/articles'>\
				<input type='text' placeholder='name' />\
			</form>"
				);
};