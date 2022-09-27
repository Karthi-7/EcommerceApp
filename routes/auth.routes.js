const authController=require('../controllers/auth.controller');


const routes=(app)=>{
    app.post('/ecom/api/v1/signup',authController.signUp);
    app.post('/ecom/api/v1/signin',authController.signin)
   
}

module.exports=routes