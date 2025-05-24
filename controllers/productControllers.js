const productService = require('../services/productService');

const getProducts = (req,res)=>{
   try {
        const result = productService.getAllProducts();
        res.sendFile(result);
    } catch (err) {
        next(err);
    }
}

const getProductsById = (req,res)=>{
     try {
        const id = req.params.id;
        const result = productService.getSingleProductById(id);
        res.send(result);
    } catch (err) {
        next(err);
    }
}

const addNewProduct = (req,res)=>{
    try {
        const result = productService.addNewProduct();
        res.send(result);
    } catch (err) {
        next(err);
    }
}


module.exports = {
    getProducts,
    getProductsById,
    addNewProduct,
}