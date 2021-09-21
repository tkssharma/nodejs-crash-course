var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller');

// Create a new Tutorial
// HTTP POST /API/V1/USER
router.post("/", controller.create);

// HTTP POST /API/V1/USER GET
// Retrieve all Tutorials
router.get("/", controller.findAll);


router.get("/:id", controller.findOne);

// HTTP POST /API/V1/USER/:ID HTTP GET
// Retrieve all published Tutorials
router.delete("/:id", controller.delete);
// HTTP DELETE /WED /WSEF /WEFSF

router.delete("/delete/all", controller.deleteAll);

module.exports = router;
