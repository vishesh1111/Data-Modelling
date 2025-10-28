import mongoose from "mongoose"
 
// creating small schema to verify multiple items
const OrderItemSchema = new mongoose.Schema({
  productId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  quantity:{
    type: Number,
    required: true
  }
})

const orderSchema = new mongoose.Schema({
  orderPrice: {
    type:Number,
    required: true
  },
 customer:{
   type: mongoose.Schema.Types.ObjectId,
   ref: "User"
 },
 orderItems:{
   type: [OrderItemSchema]
 },
 address:{
   type:String,
   required: true
 },

 status:{
   type:String,
   enum: ["Pending", "Cancelled","Delivered" ],
   default: "Pending"
 }


},{timeStamps: true})


export const Order = mongoose.model("Order" , orderSchema)