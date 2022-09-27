const {Product,Category}=require('../models/index');
const {Op}=require('sequelize');

const getAllProducts=async()=>{
    const response=await Product.findAll()
       
    return response;
}

const getProductsWithCategories=async()=>{
    const response=await Product.findAll({include:Category})
    return response
}




const createProduct=async (data)=>{
    const response =await Product.create(
        {
            name:data.name,
            description:data.description,
            cost:data.cost,
            categoryId:data.categoryId,

        }
    )
    return response
}

const updateProduct=async (idData,data)=>{
    const response=await Product.update(
        {
         name:data.name,
         description:data.description,
         cost:data.cost,
         categoryId:data.categoryId

    },{
        where:{
            id:idData
        }
    })
    return response
}

const getByCategoryId=async(idData)=>{
    const response=await Product.findAll({
        where:{
            categoryId:idData
        }
    })
    return response
}


const getProductsByCostRange=async(data)=>{
    const response=await Product.findAll(
        {
            where:{
                cost:{
                    [Op.between]:[data.minCost,data.maxCost]
                }
            }
        }
    )
    return response
}




module.exports={
    getAllProducts,
    createProduct,
    updateProduct,
    getByCategoryId,
    getProductsWithCategories,
    getProductsByCostRange
}