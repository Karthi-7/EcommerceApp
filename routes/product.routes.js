const productController=require('../controllers/product.controller')
const authMiddleWare=require('../middlewares/authentication.validation');
const routes=(app)=>{
  app.get('/ecom/api/v1/products',productController.getAllProducts);

  app.get('/ecom/api/v1/productswithCategories',productController. getProductwithcategory);

  app.get('/ecom/api/v1/product/byCostRange',productController.getProductsbyCostRange);

  app.post('/ecom/api/v1/products',authMiddleWare.checkAdmin,productController.createNewProduct)

  app.put('/ecom/api/v1/products/:id',authMiddleWare.checkAdmin,productController.updateProduct)

  app.get('/ecom/api/v1/products/:categoryId',productController.getProductsbyCategoryId)
}

module.exports=routes;