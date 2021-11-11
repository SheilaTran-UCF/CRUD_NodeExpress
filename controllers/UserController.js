const User = require('../models/User');

// show list of Users
const index = (req, res, next) => {
	User.find()
		.then(response => {
			res.json({
				response,
			});
		})
		.catch(error => {
			res.json({
				message: 'An error message',
			});
		});
};

const show = (req, res, next) => {
	let userID = req.body.userID;
	User.findById(userID)
		.then(response => {
			res.json({
				response,
			});
		})
		.catch(error => {
			res.json({
				message: 'An error Occured',
			});
		});
};
// add a new User
const store = (req, res, next) => {
	let user = new User({
		name: req.body.name,
		designation: req.body.designation,
		email: req.body.email,
		phone: req.body.phone,
		age: req.body.age,
	});
	// if (req.file) {
	// 	user.avatar = req.file.path;
	// }

	if (req.files) {
		let path = '';
		req.files.forEach(function (file, index, arr) {
			path = path + files.path + ',';
		});
		path = path.substring(0, path.lastIndexOf(','));
		user.avatar = path;
	}

	user.save()
		.then(response => {
			res.json({
				message: 'User add Successfully !',
			});
		})
		.catch(error => {
			res.json({
				message: 'An error Occured ok',
			});
		});
};

// update a Users

const update = (req, res, next) => {
	let userID = req.body.userID;

	let updateData = {
		name: req.body.name,
		designation: req.body.designation,
		email: req.body.email,
		phone: req.body.phone,
		age: req.body.age,
	};

	User.findByIdAndUpdate(userID, { $set: updateData })
		.then(() => {
			res.json({
				message: 'User update Successfully',
			});
		})
		.catch(error => {
			res.json({
				message: 'An error Occured ok',
			});
		});
};

// delete a User
const destroy = (req, res, next) => {
	let userID = req.body.userID;
	User.findOneAndRemove(userID)
		.then(() => {
			res.json({
				message: 'User delete successfully',
			});
		})
		.catch(error => {
			res.json({
				message: 'An error Occured ',
			});
		});
};

module.exports = {
	index,
	show,
	store,
	update,
	destroy,
};
