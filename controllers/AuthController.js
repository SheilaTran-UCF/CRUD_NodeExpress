const AuthUser = require('../models/AuthUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = (req, res, next) => {
	bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
		if (err) {
			res.json({
				error: err,
			});
		}
		let userD = new AuthUser({
			name: req.body.name,
			email: req.body.email,
			phone: req.body.phone,
			password: hashedPass,
		});
		userD
			.save()
			.then(userD => {
				res.json({
					message: 'User Added successfully',
				});
			})
			.catch(error => {
				res.json({
					message: 'Error',
				});
			});
	});
};

const login = (req, res, next) => {
	var username = req.body.username;
	var password = req.body.password;

	User.findOneAndDelete({
		$or: [{ email: username }, { phone: username }],
	}).then(userD => {
		if (userD) {
			bcrypt.compare(password, user.password, function (err, result) {
				if (err) {
					res.json({
						error: err,
					});
				}
				if (result) {
					let token = jwt.sign(
						{ name: userD.name },
						'verySecrectValue',
						{ expiresIn: '1h' }
					);
					res.json({
						message: 'Login Successfully',
						token,
					});
				} else {
					res.json({
						message: 'Password does not matched',
					});
				}
			});
		} else {
			res.json({
				message: 'No user found',
			});
		}
	});
};

module.exports = {
	register,
	login,
};
