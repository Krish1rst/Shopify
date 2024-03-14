const User=require('../models/user')
const {StatusCodes} =require('http-status-codes')
const {BadRequestError,UnauthenticatedError}=require('../errors')
const register=async(req,res)=>{

    const user = await User.create({...req.body});
    const token=user.createJWT()
    res.status(StatusCodes.CREATED).json({user:{name:user.name},token}); 
}

const signIn=async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        throw new BadRequestError('plz provide complete credentials')
    }
    const user = await User.findOne({ email });
    if (!user) {
        throw new UnauthenticatedError('Invalid Credentials');
    }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials');
  }
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user: {
      name: user.name,
      // userId:user._id,
      token,
    },
  });
}

module.exports={register,signIn}

