
const express=require('express')
const router=express.Router()
const {createOrder,getOrders,getAllOrders}= require('../controllers/product')

router.route('/order').post(createOrder).get(getOrders).get(getAllOrders)
module.exports=router

