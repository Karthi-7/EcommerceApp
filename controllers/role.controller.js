
const roleService=require('../service/role.service')


const addRoleToUser=async(req,res)=>{
    const response=await roleService.addRoleToUser(req.body.userEmail,req.body.roleName);
    if(response){
        return res.json(
            {
                message:" sucessfully added role to user.",
                code:200,
                status:"success"
            })
    }else{
        return res.json(
            {
                message:" Internal sever error",
                code:500,
                status:"success"
            })
    }
}

const removeRoleToUser=async(req,res)=>{
    const response=await roleService.removeRoleToUser(req.body.userEmail,req.body.roleName);
    if(response){
        return res.json(
            {
                message:" sucessfully removed role to user.",
                code:200,
                status:"success",
                data:response
            })
    }else{
        return res.json(
            {
                message:" Internal sever error",
                code:500,
                status:"success",
                err:response
            })
    }
    }


module.exports={
    addRoleToUser,removeRoleToUser
}