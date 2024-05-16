module.exports={
   addProducts:(req,res)=>{
    res.send({message:"Add Products Successfully",
        name:"soap",
        quantity:"45"
    })
   },
   removeProduct:(req,res)=>{
    res.send({message:"Remove Products Successfully",
        name:"soap",
        quantity:"45"
    })
   }


    
}