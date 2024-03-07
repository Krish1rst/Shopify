const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const userSchema= new mongoose.Schema({
 name:{
    type:String,
    required:true,
    minlength:4,
    maxlength:20,
 },
 email:{
    type:String,
    required:true,
    match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'please provide valid email'],
    unique:true

 },
 password:{
    type:String,
    require:[true,'please provide password'],
    minlength:6
 }
},{timestamps:true})

userSchema.pre('save',async function(){
    const salt= await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt)
})

module.exports=mongoose.model('User',userSchema)