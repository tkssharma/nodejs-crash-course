var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: { type: String, required: true },
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	status: {
		type: String
	},
	posts: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Post' } ]
});

module.exports = mongoose.model('User', UserSchema);
