const mongoose = require('mongoose');

const { Schema } = mongoose; 


const itemschema = new Schema({
    itemname:{
        type:String,
        required:true
    },
    slug:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        default:20
    },
    created_at:{
        type:Date,
        default:new Date()
    },
    itemtype:{
        type:String,
        required:true
    }
})


itemschema.pre('validate',function(next){
    if(this.itemname){
        this.slug = this.itemname.toLowerCase()
    }
    next()
})



module.exports = mongoose.model("Item", itemschema)