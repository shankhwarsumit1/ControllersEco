const path = require('path');

const getAllProducts = ()=>{
    const pathOfFile = path.join(__dirname,"../view/product.html");
    return pathOfFile;
};

const getSingleProductById  = (id)=>{
    return `Fetching product with ID:${id}`;
}

const addNewProduct = ()=>{
    return `Adding a new product`;
}

module.exports={
    getAllProducts,
    getSingleProductById,
    addNewProduct
}