const express = require('express');
const productController = require('../controllers/productControllers')
const router = express.Router();

router.get('/',productController.getProducts)

router.post('/',productController.addNewProduct)

router.get('/:id',productController.getProductsById)

router.put('/:id',productController.putRequestProduct)

router.delete('/:id',productController.deleteReqProduct)

module.exports=router;