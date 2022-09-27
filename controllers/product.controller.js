const productService=require('../service/product.service');

const getAllProducts=async (req,res)=>{
   const getAllProductsData=await productService.getAllProducts();
   //const response=await productService.associateProduct(req.params.customerId)
   return res.json({
    message:"sucessfully fetched",
    sucess:true,
    code:200,
   data:getAllProductsData
   })
}


const getProductwithcategory=async (req,res)=>{
    const response=await productService.getProductsWithCategories();
    return res.json({
        message: 'Successfully fetched the products',
        success: true,
        code: 200,
        data: response
    });
}


const createNewProduct=async(req,res)=>{
    const newProductData=await productService.createProduct(req.body);
    return res.json({
        message:"sucessfully created product",
        sucess:true,
        code:201,
       data:newProductData
       })
    }


    const updateProduct=async(req,res)=>{
        const response=await productService.updateProduct(req.params.id,req.body);
        return res.json({
            message:"sucessfully updated product",
            sucess:true,
            code:200,
           data:response
           })
        }
   
   const getProductsbyCategoryId=async(req,res)=>{
      const response=await productService.getByCategoryId(req.params.categoryId);
      return res.json({
        message:"sucessfully fetched data by categoryId product",
        sucess:true,
        code:200,
       data:response
       })

   }


   const getProductsbyCostRange=async(req,res)=>{
    const response=await productService.getProductsByCostRange(req.body);
    return res.json({
      message:"sucessfully fetched data by categoryId product",
      sucess:true,
      code:200,
     data:response
     })

 }


module.exports={
    getAllProducts,
    createNewProduct,
    updateProduct,
    getProductsbyCategoryId,
    getProductwithcategory,
    getProductsbyCostRange
}