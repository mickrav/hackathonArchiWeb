/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var bcrypt = require('bcrypt');
module.exports = {
	login: function (req, res) {

		var email = req.param("email");
	    var password = req.param("password");

	    if (!(email && password)) {
			return res.send('empty Password or email');
	    }

		User.findOne({email: email})
			.exec(function(err, user){
				if(err){
					console.log('no user found');
				}

				bcrypt.compare(password, user.hash, function(err, valid) {
	    			console.log(err);
	    			console.log(valid);
	    			if (err || !valid) {
	    				return res.serverError('ERROR-CREDENTIALS', err);
	    			};
	    			req.session.authenticated = true;
					req.session.userId = user.id;
					console.log('req.session');
					console.log(req.session);
					return res.redirect('/reservation');
	    	});
	   		
			
	   	});
	  	
	},

	logout: function (req, res) {
	  
	  req.session.authenticated = false;
	  req.session.userId = null;
	  return res.ok('Logged out successfully.');
	},

	signup: function (req, res) {
	  User.create(req.params.all()).exec(function (err, user) {
	    if (err) {
	    	return res.negotiate(err);
	    }
	    return res.redirect('/');
	  	});
	}
};

