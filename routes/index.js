// Importing Express
const express = require('express');
const homeController = require("../controllers/homeController")
// Creating a router to redirect requests
const router = express.Router();
//Redirecting to products route
router.get('/product', homeController.home );
router.use('/products',require('./api/product_api'));
//Exporting the router
module.exports = router;