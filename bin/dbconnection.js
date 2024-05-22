require("dotenv").config()
const colors=require("colors")

const {Sequelize}=require("sequelize")

const  sequelize= new Sequelize({
    database:process.env.DB_NAME,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    dialect:process.env.DB_DIALECT,
    port:process.env.DB_PORT
})

/// Check jo cjizy add ki hain wo hai k ni'


sequelize.authenticate().then(()=>{
    console.log("succesfully authenticated".bgBlue)
}).catch(err=>{
    console.log(err,"unable to connect".bgRed)
});



module.exports=sequelize;