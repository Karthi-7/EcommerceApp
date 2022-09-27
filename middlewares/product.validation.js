const validateProductRequest=(req,res,next)=>{
    if(!req.body.name){
        res.status(400).json({
            message:"name of the project cant be empty."
        })
    }
}