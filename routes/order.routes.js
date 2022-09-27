const orderController=require('../controllers/order.controller')
const authMiddleWare=require('../middlewares/authentication.validation')

const routes=(app)=>{
    app.post('/ecom/api/v1/addProduct',authMiddleWare.isAuthenticated,orderController.addProduct);
    app.patch('/ecom/api/v1/removeProduct',authMiddleWare.isAuthenticated,orderController.removeProduct)
}

module.exports=routes