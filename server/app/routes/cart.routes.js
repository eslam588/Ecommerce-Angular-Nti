const router=require('express').Router();
const Cart = require('../controllers/cart.controller')
const {verifyToken}=require("../middleware/auth.middleware")

router.post("/addtocart",verifyToken,Cart.addToCart)
router.put("/updatecart/:id", verifyToken,Cart.updateCart)
router.delete("/deletefromcart/:id",verifyToken,Cart.deleteFromCart)

module.exports= router;