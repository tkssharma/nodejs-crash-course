const mongoose = require('mongoose');
// 1. import 
mongoose.connect('mongodb://localhost:27017/test');
// 2. connect to librray 
const User = mongoose.model('Login',
  { name: String, email: String }
);
// 3. define model 

const user = new User({ name: 'test', email: 'test' });
user.save().then(() => console.log('meow'));


/*
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

*/