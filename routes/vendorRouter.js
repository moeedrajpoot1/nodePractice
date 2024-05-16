const express = require('express');
const router = express.Router();
const {addProducts,removeProduct}=require("../controller/vendorController")
router.get("/add",addProducts)
router.get("/remove",removeProduct)



module.exports=router;