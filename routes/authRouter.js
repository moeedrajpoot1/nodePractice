const express = require('express');
const router=express.Router();

const {login,logOut}=require("../controller/authControler")

router.get("/login",login);
router.get("/logout",logOut);

module.exports=router;