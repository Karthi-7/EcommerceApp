var jwt=require('jsonwebtoken');
const authService=require('../service/auth.service')
const authHelperService=require('../service/auth.helpservice')
const signUp=async(req,res)=>{
    const response=await authService.signUp(req.body);
    return res.status(200).json(
        {
            message: 'Successfully signed up',
            success: true,
            data: response,
        }
    )
}

const signin=async(req,res)=>{
    const userData=await authHelperService.getUserByEmail(req.body.email);
    //console.log(userData)
    if(!userData){
        return res.json(
            {
                message:"your email is invalid please try again",
                code:400,
                data:null,
                status:"sucess"
            }
        )
    }else{
        const verifyPassword=await authService.passwordVerify(req.body.password,userData.password);
        if(verifyPassword){
            var token=jwt.sign({email:userData.email,password:userData.password,username:userData.username},process.env.my_secret_key)
            return res.json(
                {
                    message:"you sucessfully signedin.",
                    code:200,
                    jsontoken:token,
                    status:"success"
                })
        }else{
            return res.json(
                {
                    message:"your password is invalid please try again",
                    code:400,
                    data:null,
                    status:"sucess"
                }
            )
        }
    }
}



module.exports={
    signUp,signin
}