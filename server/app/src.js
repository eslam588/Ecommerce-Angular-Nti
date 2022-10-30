const express= require('express');
const path= require('path');
const cors = require('cors');
require("dotenv").config()  //to use env file
require("./database/connection")
const app= express();

app.use(cors());
app.use(express.static(path.join(__dirname, './static')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))




const userRoutes = require("./routes/user.routes")
const productRoutes = require("./routes/product.routes")
const cartRoutes= require("./routes/cart.routes")

app.use("/user", userRoutes);
app.use("/product", productRoutes)
app.use("/cart", cartRoutes)



module.exports=app;








