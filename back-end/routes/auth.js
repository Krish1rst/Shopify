const express=require('express')
const router=express.Router()
const {register,signIn}=require('../controllers/user')

router.post('/register',register)
router.post('/signIn',signIn)

module.exports=router