var bcrypt = require('bcrypt');

bcrypt.genSalt(10, function(err, salt) {
	bcrypt.hash("passw0rd", salt, function(err, hash) {

	});
  }); 
