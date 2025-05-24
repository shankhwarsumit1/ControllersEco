const express = require('express');
const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const cartRoutes = require('./routes/cartRoutes.js');

app = express();
app.use('/products',productRoutes);
app.use('/cart',cartRoutes);
app.use('/users',userRoutes);


app.listen(3000,()=>{
    console.log("server is running on");
})
const express = require('express');
const productRoutes = require('./routes/productRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const cartRoutes = require('./routes/cartRoutes.js');
const { errorHandler } = require('./utils/response');

app = express();
app.use('/products',productRoutes);
app.use('/cart',cartRoutes);
app.use('/users',userRoutes);

app.use(errorHandler);

app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000/");
})