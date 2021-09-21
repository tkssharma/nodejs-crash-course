const mongoose = require('mongoose');
// 1
const Schema = mongoose.Schema;
// get schema 
// create schema 
const userDataSchema = new Schema({
  title: { type: String, required: true },
  content: String,
  author: String
}, { collection: 'user-data' });

// creat a model 
const UserData = mongoose.model('UserData', userDataSchema);
module.exports = UserData;