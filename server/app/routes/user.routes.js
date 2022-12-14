const router=require('express').Router();
const User = require('../controllers/user.controller');
const upload= require("../middleware/fileUpload.middleware")

const {verifyToken,verifyTokenAndAuthUserAndAdmin,verifyTokenForAdmin} =require("../middleware/auth.middleware")


router.post("/register" , User.register); 
router.post("/login", User.login);
router.get("/getallusers",verifyToken, User.getAllUsers);
router.get("/singleuser/:id",verifyToken, User.singleUser);
router.get("/me",verifyToken, User.me);
router.patch("/edituser",verifyToken, User.editUser)
router.post("/imgUpload", verifyToken , upload.single("img"), User.addImg)
router.get("/logout", verifyToken, User.logOut)


module.exports=router;