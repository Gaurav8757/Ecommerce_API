// Importing Express
const express = require('express');
//Importing the Product controller to redirect to perform the desired function
const productController = require('../../controllers/api/productController');
// const homeController = require("../../controllers/homeController")
// console.log(productController);
// Creating a router to redirect requests
const router = express.Router();

// router.get('/product', homeController.home);
// Shows All the Products/
router.get('/lists',productController.listProducts);
// console.log(productController.listProducts());
// Create  a new Product
router.post('/create',productController.create);

// Delete a Product with the given id
router.delete('/:id',productController.delete);

// Updates a Product with the given id to the given ammount
router.post('/update_quantity/:id',productController.updateQuantity);

// Exporting the router
module.exports = router;