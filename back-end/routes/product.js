
const express=require('express')
const router=express.Router()
const product= require('../controllers/product')

router.post('/orders',product)
module.exports=router

