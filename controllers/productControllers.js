const productService = require('../services/productService');

const getProducts = (req,res)=>{
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
}


module.exports = {
    getProducts,
    getProductsById,
    addNewProduct,
}