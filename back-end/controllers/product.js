const model=require('../models/product')
const { StatusCodes } = require('http-status-codes')


const getOrders=async (req,res)=>{
    const order= await model.find({createdBy:req.user.userId}).sort({ createdAt: -1 })
    res.status(StatusCodes.OK).json({order,count:order.length})
}
// const getAllOrders=async(req,res)=>{
//     const order=await model.find({});
//     res.status(StatusCodes.OK).json({order,count:order.length})
// }
const createOrder=async(req,res)=>{
    req.body.createdBy=req.user.userId
    const order=await model.create(req.body)
    res.status(StatusCodes.CREATED).json({order})
}

module.exports={createOrder,getOrders}