const mongoose=require('mongoose');
const validator=require('validator');
const bycrpt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const ProductSchema = mongoose.Schema({
    title:{
        type:String
    },
    imgurl:{
        type:String
    },
    desc:{
        type:String
    },
    price:{
        type:Number
    },
    sizes:{
        type:[String]
    },
    comments:[
        {
            coomenttext:{type:String, required:true, trim:true},
            userId:{type:mongoose.Schema.Types.ObjectId},
        }
]
},{timestamps:true})

// relation betwwen product model and cart model ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

ProductSchema.virtual("productsCart",{
    ref:"Cart",
    localField:"_id",
    foreignField:"productId"
})



const Product = mongoose.model("Product",ProductSchema)
module.exports=Product;