const router=require('express').Router();
const Product = require('../controllers/product.controller');
const upload= require("../middleware/fileUpload.middleware")
const {verifyToken,verifyTokenAndAuthUserAndAdmin,verifyTokenForAdmin}=require("../middleware/auth.middleware")

router.post("/createproduct",verifyToken, upload.single("img"),Product.createProduct);
router.get("/getallproducts",verifyToken, Product.getAllProducts);
router.get("/singleproduct/:id",verifyToken, Product.singleProduct);
router.patch("/editproduct/:id",verifyToken, Product.editProduct)
router.delete("/deleteproduct/:id",verifyToken, Product.deleteProduct)
module.exports=router;
