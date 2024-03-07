

const register=async(req,res)=>{
    res.send('regsiter route');
}
const signIn=async(req,res)=>{
    res.send('sign in route');
}

module.exports={register,signIn}