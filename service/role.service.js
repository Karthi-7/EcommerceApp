const{Role}=require('../models/index')
const authHelperService=require('../service/auth.helpservice')
const addRoleToUser=async(userEmail,roleName)=>{
    try{
        const user=await authHelperService.getUserByEmail(userEmail);
          
    
        const role=await getRoleByName(roleName);
         
       await user.addRole(role);
        return user;
    }
    catch(err){
        console.log(err)
    }
   
}

const removeRoleToUser=async (userEmail,roleName)=>{
    try{
        const user=await authHelperService.getUserByEmail(userEmail)
       const role=await getRoleByName(roleName)
       await user.removeRole(role);
       return user
    }
    catch(err){
        console.log(err)
    }
   
}

const getRoleByName=async(roleName)=>{
    try{
        const response=await Role.findOne(
            {
                where:{
                    name:roleName
                }
            }
            )
            return response
    }
    catch(err){
        console.log(err)
    }
    
}



module.exports={
   addRoleToUser,removeRoleToUser,getRoleByName
}