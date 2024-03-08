const mongoose=require('mongoose')
const orderSchema=new mongoose.Schema({
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
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user'],
      },

},{
    timestamps:true
})
module.exports=mongoose.model('Product',orderSchema)