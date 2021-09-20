const express = require('express');
const router = express.Router();

const mongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test';
const objectId = require('mongodb').ObjectID;

router.get('/users', function (req, res, next) {

  // connect to mongo db 
  // query the collection 
  //  play with the data 
  const array = [];
  mongoClient.connect(url, function (err, db) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    const cursor = db.collection("users").find();
    cursor.forEach(function (doc) {
      array.push(doc);
    }, function () {
      db.close();
      res.status(201).json({ result: array });
    })
  })
})

router.get('/users/:id', (req, res) => {
  const id = req.params.id;
  mongoClient.connect(url, function (err, db) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    db.collection("users").findOne({ "_id": objectId(id) }, function (err, result) {
      console.log('data fetched...');
      db.close();
      res.status(200).json(result);
    })
  });
})
router.post('/users', (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    website: req.body.website
  }
  mongoClient.connect(url, function (err, db) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    db.collection("users").insertOne(user, function (err, result) {
      console.log('data inserted');
      db.close();
    })
    res.json({ message: 'data inserted successfully' });
  });
})
router.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  mongoClient.connect(url, function (err, db) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    db.collection("users").deleteOne({ "_id": objectId(id) }, function (err, result) {
      console.log('data deleted...');
      if (err) {
        res.status(500).send(err);
        return;
      }
      db.close();
      res.status(204).send();
    })
  });
})
router.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const data = {
    name: req.body.name,
    email: req.body.email,
    website: req.body.website
  }
  mongoClient.connect(url, function (err, db) {
    if (err) {
      res.status(500).send(err);
      return;
    }
    db.collection("users").updateOne({ "_id": objectId(id) }, { $set: data }, function (err, result) {
      console.log('data UPDATED...');
      if (err) {
        res.status(500).send(err);
        return;
      }
      db.close();
      res.status(200).json(result);
    })
  });
})

module.exports = router;



/***
 * 
 *  COURSES 
 * /courses post
 *   /courses list
 *  /courses/:id get
 * /courses/:id update
 * /courses/:id delete
 * ****/