
const express=require('express')
const router=express.Router()
const order= require('../controllers/product')

router.post('/order',order)
module.exports=router

