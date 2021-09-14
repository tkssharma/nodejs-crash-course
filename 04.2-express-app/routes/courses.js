var express = require('express');
var router = express.Router();
const fs = require('fs');

const courses = [
  {
    name: "IT",
    department: "IT",
    labs: 10,
    sessions: 500
  },
  {
    name: "IT",
    department: "IT",
    labs: 20,
    sessions: 500
  },
  {
    name: "IT",
    department: "IT",
    labs: 50,
    sessions: 500
  }
]
// HTTP GET /courses?name=it&labs=30
router.get('/courses', function (req, res, next) {
  const name = req.query.name;
  const labs = req.query.labs;
  const filterData = courses.filter(i => {
    return i.labs > labs && i.name.includes(name)
  })
  res.status(200).json(filterData);
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  // const id = req.params.id
  // const name = req.query.name
  // const password = req.query.password
  try {
    var data = fs.readFileSync('courses.txt');
    console.log(data.toString());
    res.status(200).json(data.toString());
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', function (req, res, next) {
  const data = req.body;
  const str = JSON.stringify(data);
  fs.appendFile('courses.txt', str, function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
  res.status(201).json(data);
});

module.exports = router;

/*

HTTP GET 200 OK response
HTTP POST 201 CREATED
HTTP PUT 200 OK response
HTTP DELETE 204 NO_CONTENT
HTTP GET /:ID 200 RESPONSE
HTTP GET /:ID?name=test&password=test1

*/