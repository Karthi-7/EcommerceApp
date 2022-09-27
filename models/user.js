
'use strict';
const bcrypt=require('bcryptjs')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Role,{through:"User_Roles"})
      this.hasMany(models.Order,{
        foreignKey:'userId'
      })
    }
  }
  User.init({
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:true
      }
    } ,
    password:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[5,20]
      }
    }, 
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(async(user)=>{
     const salt=bcrypt.genSaltSync(10);
     let hashedPassword=bcrypt.hashSync(user.password,salt);
     user.password=hashedPassword
  })
  return User;
};