var express = require('express');
var router = express.Router();

const ctrlAbout = require('../controllers/about'); // Link the controller

// Route to GET /about
router.get('/', ctrlAbout.about);

module.exports = router;
