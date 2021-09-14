var express = require('express');
var router = express.Router();

let cat = [{
  name: 'cat1',
  id: '1',
  age: '12 months',
  breed: 'xyz'
}]
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.status(200).json(cat);
});
router.get('/:id', function (req, res, next) {
  const catId = req.params.id;
  const selectedCat = cat.filter(catItem => {
    return catItem.id === catId
  }) || [];
  res.status(200).json(selectedCat)
});
router.post('/', function (req, res, next) {
  const newCat = req.body;
  cat.push(newCat);
  res.status(201).json(req.body);
});
router.put('/:id', function (req, res, next) {
  const catId = req.params.id;
  const { name, age, breed } = req.body;
  cat.forEach(catItem => {
    if (catId === catItem.id) {
      catItem.name = name;
      catItem.age = age;
      catItem.breed = breed;
    }
  })
  const selectedCat = cat.filter(catItem => {
    return catItem.id === catId
  }) || [];
  res.status(200).json(selectedCat)
});
router.delete('/:id', function (req, res, next) {
  const catId = req.params.id;
  const updatedList = cat.filter(catItem => {
    return catItem.id !== catId
  }) || [];
  cat = updatedList;
  res.status(204).json(null);
});

module.exports = router;

/*

HTTP GET 200 OK response
HTTP POST 201 CREATED
HTTP PUT 200 OK response
HTTP DELETE 204 NO_CONTENT
HTTP GET /:ID 200 RESPONSE

*/