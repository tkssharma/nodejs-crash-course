var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // get all posts and return 
  // https://jsonplaceholder.typicode.com/posts
});

router.get('/:id', function(req, res, next) {
  // get all posts and return 
  //https://jsonplaceholder.typicode.com/posts/1
});

/* GET users listing. */
router.post('/:id/comments', function(req, res, next) {
  // get post in request body and send it 
 // https://jsonplaceholder.typicode.com/posts/1/comments
});

module.exports = router;

/*
const user = [{
  isLoggedIn : true,
  username: "",
  email: "test@gmail.com",
  password: ""
}]
const user = [{
  isLoggedIn : true,
  username: "",
  email: "unique",
  password: ""
}]
1. create user collection as array 
2. register HTTP POST /register  [username, password, email]
3. login HTTP POST /login [username, password]
user login post
user register post 

HTTP POST courses?email=test@gmail.com
after user loggedIn -- get course 
HTTP GET courses?email=test@gmail.com
after user loggedIn -- update course 
HTTP PUT courses?email=test@gmail.com
after user loggedIn -- delete course
*/
