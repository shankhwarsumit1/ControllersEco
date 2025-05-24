const getCartForUser=(req,res)=>{
<<<<<<< HEAD
       res.send(`Fetching cart for user with ID:${req.params.userId}`);
}

const addProductToCart = (req,res)=>{
    res.send(`Adding product to cart for user with ID:${req.params.userId}`);
}
=======
  try {
        res.send(`Fetching cart for user with ID:${req.params.userId}`);
    } catch (err) {
        next(err);
    }}

const addProductToCart = (req,res)=>{
      try {
        res.send(`Adding product to cart for user with ID:${req.params.userId}`);
    } catch (err) {
        next(err);
    }}
>>>>>>> 4f8477f (Initial commit with centralized error handling)

module.exports = {
    getCartForUser,
    addProductToCart
}