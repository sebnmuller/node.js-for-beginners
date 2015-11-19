var http = require('http'),
	url = require('url'),
	server = http.createServer();

server.on('request', function(request, response) {
	console.log("--incoming request--");
	var incomingUrl = url.parse(request.url);
	console.log(incomingUrl);
	
	if(incomingUrl.path === '/hello') {
		response.writeHead(200, {'Content-Type':'text/plain'});
		response.end('Hello World');	
	} else if (incomingUrl.path === '/goodbye') {
		response.writeHead(200, {'Content-Type':'text/plain'});
		response.end('Goodbye World');
	} else {
		response.writeHead(404, {'Content-Type':'text/plain'});
		response.end('Resource not found');
	}
	
	//response.writeHead(200, {'Contet-Type':'text/plain'});
	//response.end('Hello World');
});

server.listen(9000);