const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    userId : {type :mongoose.Schema.Types.ObjectId, required : true},
    products : [
        {
            productId : {type :mongoose.Schema.Types.ObjectId},
        }
    ]
},{ timestamps: true })

const Cart = mongoose.model('Cart', CartSchema)

module.exports = Cart;