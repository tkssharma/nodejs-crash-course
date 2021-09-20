const express = require('express');
const router = express.Router();
const Schema = mongoose.schema;
const url = 'mongodb://localhost:27017/test';
mongoose.connect(url);
/*
const User = mongoose.model('Login',
  { name: String, email: String }
);
*/
const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: String
})
const UserModel = mongoose.model('Users', userSchema)


router.get('/users', function (req, res, next) {
})

router.get('/users/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById(id, function(err, data) {
      res.status(200).json(data);
  })
})
router.post('/users', (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email
  }
  const data = new UserModel();
  data.save();
  res.status(201).json({ message: 'created' });

})
router.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  const id = req.params.id;
  UserModel.findByIdAndRemove(id, function(err, data) {
      res.status(200).json({});
  })

})
router.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const data = {
    name: req.body.name,
    email: req.body.email,
    website: req.body.website
  }

})

module.exports = router;



/***
 *
 *  COURSES
 * /courses post
 *   /courses list
 *  /courses/:id get
 *  *  /courses?name=something get
 * /courses/:id update
 * /courses/:id delete
 * ****/