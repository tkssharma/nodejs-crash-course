const UserModel = require("../models/user");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  const payload = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  }
  const user = new UserModel(payload);
  user.save().then(data => {
    res.status(201).json(data);
  }).catch(err => {
    res.status(500).send(err);
  })
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  UserModel.find({})
    .then(data => {
      res.status(200).json(data);
    }).catch(err => {
      res.status(500).send(err);
    })
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  UserModel.findById(id)
    .then(data => {
      res.status(200).json(data);
    }).catch(err => {
      res.status(500).send(err);
    })
}

// Retrieve all Tutorials from the database.
exports.delete = (req, res) => {

  const id = req.params.id;
  UserModel.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send('NOT FOUND');
      } else {
        res.status(200).json(data);
      }
    }).catch(err => {
      res.status(500).send(err);
    })
}

exports.deleteAll = (req, res) => {

  UserModel.deleteMany({})
    .then(data => {
      res.status(200).json(data);

    }).catch(err => {
      res.status(500).send(err);
    })
}

exports.update = (req, res) => {

  const id = req.params.id;
  UserModel.findByIdAndUpdate(id, req.body)
    .then(data => {
      if (!data) {
        res.status(404).send('NOT FOUND');
      } else {
        res.status(200).json(data);
      }
    }).catch(err => {
      res.status(500).send(err);
    })
}