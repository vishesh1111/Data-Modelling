import mongoose from "mongoose"

const patientSchema = new mongoose.Schema({

  name:{
    type:String,
    required: true
  },
  diagnosedWith:{
    type:String,
    required: true
  },
  address :{
    type:String,
    required: true
  },
  admittedIn: {
    type:mongoose.Schema.Types.ObjectId,
    ref: "Hospital"
  }

},{timestamps: true});


export const Patient = mongoose.model('Patient', patientSchema)