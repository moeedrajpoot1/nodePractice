const  {hash}=require("bcryptjs")
const userModel=require("../models/userModel")
const {v4:uuid}=require("uuid")

module.exports={
    createUser:async(body)=>{
        try {
                
         delete body.confirmPassword
         const IsUser=await userModel.getUser(false,body.userName);
         if(IsUser.error || IsUser.response){
            return{
                error:IsUser.error
            }
         }
         body.password= await hash(body.password,10) 
         body.userId=uuid()
         const user=await userModel.createUser(body);
         if(user.error){
            return{
                error:user.error,
            }
         }
         delete user.response.dataValues.password;
            return {
                response:user.response.dataValues,
            }
        } catch (error) {
            return {
                error: error          }      }
    },
    getAllUsers:async(body)=>{
        try {
              const  users=await userModel.getAllUsers()  ;
              if(users.error){
                return{
                    error:"no user exist"
                }
              }
        
       
        } catch (error) {
            return {
                error: error          }      }
    }
}