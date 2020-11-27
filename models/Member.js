const mongoose = require('mongoose');

const { Schema } = mongoose; 


const memberschema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    hash:{
        type:String,
        required:false
    },
    balance:{
        type:Number,
        default:20,
        min:0
    },
   
})




module.exports = mongoose.model("Member", memberschema)