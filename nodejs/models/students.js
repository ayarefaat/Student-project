const mongoose=require('mongoose')
let studentSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    Mobile:{
        type:Number,
        required:true,
        unique:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    }
});
module.exports=mongoose.model("student",studentSchema)