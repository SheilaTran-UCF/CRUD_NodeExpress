const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		name: {
			type: 'String',
		},
		designation: {
			type: 'String',
		},
		email: {
			type: 'String',
		},
		phone: {
			type: 'String',
		},
		age: {
			type: 'number',
		},
		avatar: {
			type: 'String',
		},
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
