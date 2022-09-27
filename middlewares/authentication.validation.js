const authservice=require('../service/auth.service')
const roleService=require('../service/role.service')
const authHelperService=require('../service/auth.helpservice')
const isAuthenticated=async(req,res,next)=>{
    const token=req.headers['x-access-token'];
    if(!token){
        return res.json(
            {
                status:401,
                message:"jwt token missing",
                data:{},
                err:"invalid or missing argument in headers"
            }
        )
    }

   const response=authservice.verifyToken(token);
   if(!response){
    return res.json(
        {
            status:401,
            message:"Invalid jwt token ",
            data:{},
            err:"invalid auth details" 
        }
    )
   }

 const user=await authHelperService.getUserByEmail(response.email);
 if(!user){
    return res.json(
        {
            status:401,
            message:"jwt token send for invalid user",
            data:{},
            err:"invalid credentials" 
        }
    )
 }
 req.user=user
next()
}

const checkAdmin=async (req,res,next)=>{
    const user=req.user;
    const adminRole=await roleService.getRoleByName('admin');
    const isAdmin=await user.hasRole(adminRole)
   
    if(!isAdmin){
        return res.json({
            status: 401,
            message: "User is not admin",
            data: {},
            err: 'Not authorized'
        });
    }
    next()
}

const checkAdminOrSeller=async (req,res,next)=>{
    const user=req.user;
    const adminRole=await roleService.getRoleByName('admin');
    const sellerRole=await roleService.getRoleByName('seller');
    const isAdmin=await user.hasRole(adminRole)
    const isSeller=await user.hasRole(sellerRole)
    if(!isAdmin && !isSeller){
        return res.json({
            status: 401,
            message: "User is not admin",
            data: {},
            err: 'Not authorized'
        });
    }
    next()
}

module.exports={
    isAuthenticated,checkAdmin,checkAdminOrSeller
}