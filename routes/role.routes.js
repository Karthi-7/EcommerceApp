const roleController=require('../controllers/role.controller');
const authMiddleWare=require('../middlewares/authentication.validation');

const routes=(app)=>{
    app.post('/ecom/api/v1/role',authMiddleWare.isAuthenticated,authMiddleWare.checkAdmin,roleController.addRoleToUser);
    app.delete('/ecom/api/v1/role',authMiddleWare.isAuthenticated,authMiddleWare.checkAdmin,roleController.removeRoleToUser)
}

module.exports=routes