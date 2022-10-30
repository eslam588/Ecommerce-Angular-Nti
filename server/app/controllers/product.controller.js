const productModel= require('../models/product.model');

class Product {

    // create product ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

    static createProduct = async(req,res) => {
        try{
            let imgurl = await req.file.path.replace("app\\static\\","");
            const createdProduct = new productModel({...req.body , imgurl});
            await createdProduct.save();
            res.status(200).send({apiStatus:true , data:createdProduct, message:"Product Added" })
        }
        catch(e){
            res.status(500).send({apiStatus:false , data:e , message:e.message})     
        }
    }

     // upload image ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

    //  static addImg = async (req,res)=>{
    //     try{
    //         req.body.imgurl = req.file.path.replace("app\\static\\","")
    //         await req.body.save()
    //         // res.status(200).send({apiStatus:true, data:req.body, MessageEvent:"done"})
    //         return imgurl
    //     }
    //     catch(e){
    //         res.status(500).send({apiStatus:false, data:e, message:e.message})
    //     }
    // }

    // get all products ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    
    static getAllProducts = async(req,res) => {
        try{
            const products = await productModel.find();
            res.status(200).send({apiStatus:true , data:products , message:"fetch all products"})
        }
        catch(e){
            res.status(500).send({apiStatus:false , data:e , message:e.message})    

        }
    }

    // get single product ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    
    static singleProduct = async(req,res) => {
        try{
            const product = await productModel.findById(req.params.id);
            res.status(200).send({apiStatus:true , data:product , message:"fetch single product"})

        }
        catch(e){
            res.status(500).send({apiStatus:false , data:e , message:e.message})    

        }
    }

    // edit  product ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    
    static editProduct = async(req,res) => {
      try {
              const updatedProduct = await Product.findByIdAndUpdate(
                req.params.id,
                {
                  $set: req.body
                }
              );
              res.status(200).json(updatedProduct);
            } catch (err) {
              res.status(500).json(err);
            }
    }

    // delete  product ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

    static deleteProduct = async(req,res) => {
        try{
            const deletedProduct = await productModel.findByIdAndDelete(req.params.id);
            res.status(200).send({apiStatus:true , data:deletedProduct, message:"delete product"})
        }
        catch(e){
            res.status(500).send({apiStatus:false , data:e , message:e.message})    

        }
    }


}

module.exports = Product;