const getCartForUser=(req,res)=>{
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

module.exports = {
    getCartForUser,
    addProductToCart
}