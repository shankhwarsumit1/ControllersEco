const productService = require('../services/productService');

const getProducts = (req,res)=>{
<<<<<<< HEAD
    const result = productService.getAllProducts();
    res.sendFile(result);
}

const getProductsById = (req,res)=>{
    const id = req.params.id
    const result = productService.getSingleProductById(id);
    res.send(result);
}

const addNewProduct = (req,res)=>{
   const result = productService.addNewProduct();
   res.send(result);
=======
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
>>>>>>> 4f8477f (Initial commit with centralized error handling)
}


module.exports = {
    getProducts,
    getProductsById,
    addNewProduct,
}