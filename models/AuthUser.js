const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		name: {
			type: 'String',
		},
		email: {
			type: 'String',
		},
		phone: {
			type: 'String',
		},
		password: {
			type: 'String',
		},
	},
	{ timestamps: true }
);

const AuthUser = mongoose.model('Auth_user', userSchema);
module.exports = AuthUser;
