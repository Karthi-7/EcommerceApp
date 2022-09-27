const {Category}=require('../models/index')

//to get all categories
const getAllCategories=async ()=>{
    const allCategoriesData=await Category.findAll();
    return allCategoriesData
}
 //to create categories
const createAllCategories=async (data)=>{
   const createNewCategory=await Category.create({
        name:data.name,
        description:data.description
    })
    return createNewCategory
}

//to get categories by id

const getCategoriesById=async (idData)=>{
    const response=await Category.findAll({
        where:{
            id:idData
        }
    })
    return response
}

const getCategoriesByName=async (nameData)=>{
    const response=await Category.findAll({
       where:{
        name:nameData
       }
    })
    return response
}

const updateCategory=async(id,data)=>{
    const response=await Category.update(
        {
        name:data.name,
        description:data.description
    },{
        where:{
            id:id
        }
    }
    );
    return response;
}


const deleteCategory=async(id)=>{
    const response=await Category.destroy({
        where:{
            id:id
        }
    })
    return response;
}




module.exports={
    getAllCategories,
    createAllCategories,
    getCategoriesById,
    getCategoriesByName,
    updateCategory,
    deleteCategory,
    
}