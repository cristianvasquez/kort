require('mongoose').model('User');
var mongoose = require('mongoose');

var LocalStrategy = require('passport-local').Strategy;

var User = mongoose.model('User');

module.exports = function(adminEmail, adminPassword) {
	var admin_user = new User();
	admin_user.email = adminEmail;
	admin_user.password = admin_user.generateHash(adminPassword);

	User.findOne({ 'email' :  adminEmail }, function(err, user) {
		// if there are any errors, return the error
		if (err)
			return done(err);

		// check to see if theres already a user with that email
		if (!user) {
			// save the user
			admin_user.save(function(err) {
				if (err)
					throw err;
				console.log("createadmin_user.js: Default admin user created.");
			});
		}
	});
}
