var http = require('http'),
	url = require('url'),
	server = http.createServer();

server.on('request', function(request, response) {
	console.log("--incoming request--");
	response.writeHead(200, {'Contet-Type':'text/plain'});
	response.end('Hello World');
});

server.listen(9000);