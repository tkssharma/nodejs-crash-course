var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
const UserModel = require('../model/user');


router.get('/get', function (req, res) {
  UserModel.find(function (err, docs) {
    if (err) {
      res.status(500).send(err);
    }
    res.json(docs)
  })
})


router.get('/get/:id', function (req, res) {
  const id = req.params.id;
  UserModel.findById(id, function (err, doc) {
    if (err) {
      res.status(500).send(err);
    }
    res.json(doc)
  })
})

router.delete('/delete/:id', function (req, res) {
  const id = req.params.id;
  UserModel.findByIdAndRemove(id, function (err, doc) {
    if (err) {
      res.status(500).send(err);
    }
    res.json(doc)
  })
})


router.put('/update/:id', function (req, res) {
  const id = req.params.id;

  UserModel.findById(id, function (err, doc) {
    if (err) {
      res.status(500).send(err);
    }
    doc.title = req.body.title;
    doc.content = req.body.content;
    doc.author = req.body.author;
    doc.save(function (err) {
      if (err) {
        res.status(500).send(err)
      }
      res.status(200).json({ message: 'updated successfully' });
    })
  })
})


router.post('/save', function (req, res) {
  const payload = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  }
  const user = new UserModel(payload);
  user.save(function (err) {
    if (err) {
      res.status(500).send(err)
    }
    res.status(201).json({ message: 'created successfully' });
  });
})

module.exports = router;