const validateCategoryRequest=(req,res,next)=>{
    if(!req.body.name){
        res.status(400).json(
            {
                message:"name of the category cant be empty."
            }
        )
        return
    }
    next()
}

module.exports={
    validateCategoryRequest
}