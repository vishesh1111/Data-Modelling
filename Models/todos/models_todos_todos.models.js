import mongoose from "mongoose"


const todoSchema = new mongoose.Schema(
  {
    content:{
      type:String,
      required:true,

    },
    complete:{
      type:Boolean,
      default: false,

    },
    // now this is the relational part below it has to be linked with someother data!
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    subTodos: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "subTodo"
    }
  ] //Array Of sub-Todos


},{timestamps:true}
) 

export const Todo = mongoose.model("Todo", todoSchema)