const joi=require("joi");


const loginSchema=joi.object().keys({
    userName:joi.string().min(5).max(15).required(),
    
    password:joi.string().min(6).max(18).required(),
  
})


module.exports={
    login:async(req,res)=>{
        try {
            const validate=await loginSchema.validateAsync(req.body) 
            return res.send({
                message:"Login successful",
                data:validate,
            })
        } catch (error) {
            return res.send({message:error.message})
        }
    },
    logOut:(req,res)=>{
        res.send({message:"Logout Successfully"});
    }
}



