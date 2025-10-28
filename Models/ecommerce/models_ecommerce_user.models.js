import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

  username: {
    type:String,
    required:true,
    uniqueness: true,
    lowerCase: true,
    
  },

  email: {
    type:String,
    required:true,
    uniqueness: true,
    lowerCase: true,
    
  },
  password:{
    type:String,
    required: true

  },

}, {timestamps:true})



export const User = mongoose.model("User", userSchema)