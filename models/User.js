


module.exports=(sequelize,DataTypes)=>{
     const Product=sequelize.define("Products",{
        name:DataTypes.STRING,
        price:DataTypes.INTEGER,
        quantity:DataTypes.INTEGER
        
    },{
        timestamps:false
    })
return Product
}
