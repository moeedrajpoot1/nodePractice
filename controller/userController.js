const joi =require("joi");
const userServices=require("../services/userServices")
const createUserSchema= joi.object().keys({
    userName:joi.string().required(),
    
    password:joi.string().required(),
    
})

module.exports={
    user:async(req,res)=>{
        try {
            const uservalidate= await createUserSchema.validateAsync(req.body)
            const user=await  userServices.createUser(uservalidate);
            if(user.error){
          return res.send({ 
            error:user.error
          })
            }
            return res.send({
               response:user.response
            })
        } catch (error) {
            return res.send({message:error.message})
        }
     
    },
    
}
