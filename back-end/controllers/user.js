const User=require('../models/user')
const {StatusCodes} =require('http-status-codes')

const register=async(req,res)=>{

        const user = await User.create({...req.body});
        const token=user.createJWT()
        res.status(StatusCodes.CREATED).json({user:{name:user.name},token});
   
}
const signIn=async(req,res)=>{
    const {email,password}=req.body;
    if(email===''||password===''){
        res.status
    }
    res.send('sign in route');
}

module.exports={register,signIn}

