const {Schema, model} = require('mongoose');

const userSchema = new Schema({
	name: { type: String, require: true },
	email: { type: String, require: true, unique: true},
	password: { type: String, require: true },
	role: {type: String, require: true}
});

const UserModel  = model("user", userSchema);

module.exports = UserModel;