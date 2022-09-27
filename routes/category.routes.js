const categorycontroller=require("../controllers/category.controller");
const categoryMiddleWare=require('../middlewares/category.validation');
const authMiddleWare=require('../middlewares/authentication.validation');

const routes=(app)=>{
    //to get all categories
    app.get('/ecom/api/v1/categories',categorycontroller.getCategories);

    //to create categories
    app.post('/ecom/api/v1/categories',authMiddleWare.isAuthenticated,authMiddleWare.checkAdmin,categorycontroller.createCategories);

    //to get categories by id
    app.get('/ecom/api/v1/categories/:id',categorycontroller.getCategoriesById)

    ///to get categories by name
    app.get('/ecom/api/v1/categoriesName',categoryMiddleWare.validateCategoryRequest,categorycontroller.getCategoriesByName);

    //to update category
    app.put('/ecom/api/v1/categories/:id',authMiddleWare.checkAdmin,categorycontroller.updateCategory)

    //to delete category
    app.delete('/ecom/api/v1/categories/:id',authMiddleWare.checkAdmin,categorycontroller.deleteCategory)
}
module.exports=routes