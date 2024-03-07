const mongoose=require('mongoose')
const productSchema=new mongoose.productSchema({
    name:{
        type:String,
        required:true,
        minlength:4,
        maxlength:20
    },
    address:{
        type:String,
        required:true,
        minlength:4
    },
    product:{
        type:Number,
        required:true,
    },
    cost:{
        type:Number,
        required:true
    }

},{
    timestamps:true
})
module.exports=mongoose.model('Product',productSchema)