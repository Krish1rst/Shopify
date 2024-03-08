const model=require('../models/product')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getOrders=async (req,res)=>{
    const order= await model.find({createdBy:req.user.userId}).sort({ createdAt: -1 })
    res.status(StatusCodes.OK).json({order,count:order.length})
}
const createOrder=async(req,res)=>{
    req.body.createdBy=req.user.userId
    const order=await model.create(req.body)
    res.status(StatusCodes.CREATED).json({order})
    // res.status(200).send('ok from here')
}

module.exports={createOrder,getOrders}