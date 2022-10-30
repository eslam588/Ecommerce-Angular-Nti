const cartModel = require('../models/cart.model');
const productModel = require('../models/product.model'); 

class Cart {
    
    // add to cart ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

    static addToCart = async (req,res) => {
        try{
            let customerCart = await cartModel.findOne({userId:req.user._id});
            const product = await productModel.findById(req.body.productId);
            console.log(product);
            if(!customerCart){
                console.log(1)
                customerCart =  new cartModel({userId:req.user._id,products:[req.body]});
                await customerCart.save();  
                return res.status(200).send(customerCart);   
            }  
            const productInCart = customerCart.products.find( cartItem=> cartItem.productId.toString() === req.body.productId);
            
            if(!productInCart){
                console.log(2)
                customerCart.products.push({productId:req.body.productId});
                await customerCart.save();
            } 
            res.send(productInCart)  
        }
        catch(err) {
            res.send(err.message)
        }
    }

   // update to cart ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

    static updateCart = (req,res) => {
        try{

        }
        catch(e){
            
        }
    }

      // delete from cart ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
   
      static deleteFromCart = (req,res) => {
        try{

        }
        catch(e){
            
        }
    }


}

module.exports = Cart;