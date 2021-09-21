const mongoose = require('mongoose');
// 1
const Schema = mongoose.Schema;
// get schema 
// create schema 
const blogSchema = new Schema({
  title: { type: String, required: true },
  content: String,
  author: String
}, { collection: 'blogs' });

// creat a model 
const BlogData = mongoose.model('blogs', blogSchema);
module.exports = BlogData;