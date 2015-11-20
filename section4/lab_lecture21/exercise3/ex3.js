var bcrypt = require('bcrypt');

var original = 'passw0rd';

var salt =	bcrypt.genSalt(10, function(err, salt) {
				if(err) return next(err);
				var hased = bcrypt.hash(original, salt, function(err, hash) {
				});
			});

console.log(original);
console.log(hashed);

