const express=require('express')
const router=express.Router()
const {register,signIn,resetPassword}=require('../controllers/user')

router.post('/register',register)
router.post('/signIn',signIn)
router.post('/resetPassword',resetPassword)

module.exports=router
