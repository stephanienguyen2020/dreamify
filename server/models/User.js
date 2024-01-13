const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	type: {
		type: Number,
		enum: [0, 1]
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

module.exports = mongoose.model('users', UserSchema)