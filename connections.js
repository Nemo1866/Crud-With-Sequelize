require('dotenv').config()
const {Sequelize,DataTypes}=require("sequelize");


const sequelize=new Sequelize(process.env.DATABASE,process.env.USER,process.env.PASSWORD,{
    host:process.env.HOST,
    logging:false,
    dialect:"mysql"
})
sequelize.authenticate().then(()=>{
    console.log("Database is connected");
}).catch(err=>{
    console.log("Error "+err);
})



const db={}
db.Product=require("./models/User")(sequelize,DataTypes)
db.sequelize=sequelize
db.Sequelize=Sequelize
sequelize.sync()

module.exports=db