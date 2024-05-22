const express=require("express")
const router=express.Router()
const {user}=require("../controller/userController")


router.post("/users",user)



module.exports=router;