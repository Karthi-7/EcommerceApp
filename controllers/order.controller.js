const orderService=require('../service/order.service');
const {STATUS}=require('../config/order.constants')

const addProduct=async(req,res)=>{
   let order=await orderService.getOrderByUser(req.user,STATUS.CREATION)
   if(!order){
      order=await orderService.createOrder(req.user);


   }
   let response=await orderService.addProductToOrder(req.body.productId,order.id)
   if(response){
    return res.json({
        status: 200,
        success: true,
        message: 'Successfully added product to order'
    });
}
}

const removeProduct=async(req,res)=>{
    let order=await orderService.getOrderByUser(req.user,STATUS.CREATION);
    if(!order){
        return res.json({
            message:"no product in order",
            ststus:400,
            sucees:true
        })
    }
    const response=orderService.removeProductFromOrder(req.body.productId,order.id);
    if(!response){
        return res.json({
            message:"product doesnt exist",
            ststus:400,
            sucees:true
        })
    }
    if(response.error){
        return res.json({
            message:response.error,
            ststus:400,
            sucees:true
        })
    }
    return res.json({
        status: 200,
        success: true,
        message: 'Product removed from order successfully'
    })
    
}

module.exports={
    addProduct,removeProduct
}