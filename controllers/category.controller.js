
const categoryService=require('../service/category.service')
const getCategories=async (req,res)=>{
    const allCategoriesData= await categoryService.getAllCategories()
    return res.json({
        message:"sucessfully fetched",
        sucess:true,
        code:200,
       date:allCategoriesData
    })
};

const createCategories=async(req,res)=>{
    const createCategory=await  categoryService.createAllCategories(req.body)
    return res.json({
        message:"sucessfully created data",
        sucess:true,
        code:201,
       date:createCategory
    })
}

const getCategoriesById=async(req,res)=>{
    const response=await categoryService.getCategoriesById(req.params.id);
    return res.json({
        message:"sucessfully fetched data by id",
        sucess:true,
        code:200,
       date:response
    })
}

const getCategoriesByName=async(req,res)=>{
    const response=await categoryService.getCategoriesByName(req.query.name);
    return res.json({
        message:"sucessfully fetched data by name",
        sucess:true,
        code:200,
       date:response
    })
}

const updateCategory=async(req,res)=>{
    const response=await categoryService.updateCategory(req.params.id,req.body);
    return res.json({
        message:"sucessfully updated the data.",
        sucess:true,
        code:201,
       date:response
    })
}

const deleteCategory=async(req,res)=>{
    const response=await categoryService.deleteCategory(req.params.id);
    return res.json({
        message:"sucessfully deleted the category.",
        sucess:true,
        code:201,
       date:response
    })
}

module.exports={
    getCategories,
    createCategories,
    getCategoriesById,
    getCategoriesByName,
    updateCategory,
    deleteCategory
}