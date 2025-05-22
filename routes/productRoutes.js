const express = require('express');
const productController = require('../controllers/productControllers')
const router = express.Router();

router.get('/',productController.getProducts)

router.post('/',productController.addNewProduct)

router.get('/:id',productController.getProductsById)

module.exports=router;