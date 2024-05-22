const sequelize = require("../bin/dbconnection")
const users=require("./definations/users")

const models={users}


// khali object bnya aik
const Db={};


// db k andr aik sequlize bnya
Db.sequelize = sequelize
// or usko kaha sequilize mai jo model ha usko hamra model de do 
sequelize.models = models
module.exports ={Db,models}