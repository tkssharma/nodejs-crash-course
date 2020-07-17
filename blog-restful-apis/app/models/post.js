var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
	title: { type: String, required: true },
	content: {
		type: String
	},
	status: {
		type: String
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});

module.exports = mongoose.model('Post', PostSchema);
