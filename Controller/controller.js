let {Product}=require("../connections")
module.exports={
createProduct:async(req,res)=>{
    
    let product= await Product.create({name:req.body.name,price:req.body.price,quantity:req.body.quantity})
   

 
 
    res.json({
data:product
    })
},getProducts:async(req,res)=>{
    let products=await Product.findAll({})

    res.json({
        products:products
    })
},getProductsById:async(req,res)=>{
    let product=await Product.findOne({where:{id:req.params.id}})
    res.json({
        product:product
    })
},deleteProduct:async (req,res)=>{
    let product=await Product.destroy({where :{id:req.params.id}})
    res.json({
        data:product
    })
},updateProduct:async(req,res)=>{
  let data=req.body
    let product=await Product.update(data,{where :{id:req.params.id}})
    res.json({
        data:product
    })
}
}