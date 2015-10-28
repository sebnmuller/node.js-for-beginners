var fs = require("fs");

var writeFiles = function(n, name) {
	for(var x = 0;x < n; x++) {
		fs.writeFileSync("./" + name + x + ".txt", x);		
	}
}

writeFiles(2, "test");	