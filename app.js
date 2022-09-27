const express=require("express");
const categoryRoutes=require("./routes/category.routes");
const productRoutes=require('./routes/product.routes');
const authRoutes=require('./routes/auth.routes');
const roleRoutes=require('./routes/role.routes')
const orderRoutes=require('./routes/order.routes')
const {PORT}=require('./config/server.config')
const bodyParser=require("body-parser");
const { sequelize } = require("./models/index");
const app=express();
app.use(bodyParser.urlencoded({extended:true}))



categoryRoutes(app);
productRoutes(app);
authRoutes(app)
roleRoutes(app)
orderRoutes(app)

app.listen(PORT,async()=>{
    await sequelize.sync()
    console.log("listening to port:",PORT);
})