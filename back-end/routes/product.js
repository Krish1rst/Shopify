
const express=require('express')
const router=express.Router()
const {createOrder,getOrders}= require('../controllers/product')

router.route('/order').post(createOrder).get(getOrders)
module.exports=router

