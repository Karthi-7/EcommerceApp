const {User}=require('../models/index')
const roleService=require("../service/role.service")
const bcrypt=require('bcryptjs')
var jwt = require('jsonwebtoken');
require('dotenv').config();

const signUp=async (data)=>{
    try{
        const user=await User.create(
            {
              username:data.username,
              email:data.email,
              password:data.password
            }
        )
        const customerRole=await roleService.getRoleByName("customer");
        await user.addRole(customerRole)
        return user
    }
    catch(err){
        console.log(err)
    }
   
}



const passwordVerify=async(password,hashedPassword)=>{
    const response=bcrypt.compareSync(password,hashedPassword)
    return response
}

const verifyToken=(token)=>{
    try{
        const response= jwt.verify(token,process.env.my_secret_key)
        return response
    }
    catch(err){
        console.log(err)
    }
 
}



module.exports={
    signUp,passwordVerify,verifyToken
}