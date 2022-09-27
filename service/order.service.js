const { STATUS } = require('../config/order.constants')
const {Order,Product,Order_Product}=require('../models/index')
const getOrderByUser=async(user,orderStatus)=>{
    try{
        const order=await Order.findOne(
            {
              where:{
                userId:user.id,
                status:orderStatus
              }
            }
        )
        return order
    }
  catch(err){
    console.log(err)
  }
}

const createOrder=async(user)=>{
    const order=await Order.create({
        userId:user.id,
        status:STATUS.CREATION
    })
    return order
}

const addProductToOrder=async(productId,orderId)=>{
    const order=await Order.findByPk(orderId);
    const product=await Product.findByPk(productId);
    const entry=await order.addProduct(product,{through:{quantity:1}});
    return entry
        
    
}

const removeProductFromOrder=async(productId,orderId)=>{
  try{
    const order=await Order.findByPk(orderId);
    if(order.STATUS!=STATUS.CREATION){
      return{
        error:"order cant be modified"
      }
    }
    const product=await Product.findByPk(productId);
    if(!product){
      return{
        error:"no such product found"
      }
    }
    const entry=await Order_Product.findOne({
      where:{
        orderId:order.id,
        productId:product.id
      }
    })
    if(!entry){
      return{
        error:"no such product found in order"
      }
    }
    if(entry.quantity<=1){
      Order.removeProduct(product)
    }else{
      await entry.decrement('quantity',{by:1})
    }
    return entry;
  }
  catch(err){
    console.log(err)
  }
}

module.exports={
    getOrderByUser,createOrder,addProductToOrder,removeProductFromOrder
}