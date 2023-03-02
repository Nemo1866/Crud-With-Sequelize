const Redis=require("redis")

const RedisClient=Redis.createClient()
RedisClient.connect()
RedisClient.on('error',(err)=>{
    console.log(err);
})
RedisClient.on('connect',(err)=>{
    console.log("Connected ");
})

let DefaultValue=3600
let {Product}=require("../connections")
module.exports={
createProduct:async(req,res)=>{
    
   for(let i=0;i<=50000;i++){
    await Product.create({
        name:`Product ${i}`,
        price:`${i}`,
        quantity:`${i}`
    })
   }
   

 res.send("Created")
 

},getProducts:async(req,res)=>{
    console.log('get products hit')
    try {
       
        let check=await RedisClient.GET('products')
      
         
            if(check){
                console.log("Hit");
                res.json(JSON.parse(check))
            }else{
                console.log("Cached");
                let products=await Product.findAll()
                await RedisClient.SETEX('products',DefaultValue,JSON.stringify(products))
                res.json(products)
            }
           
    
    }catch(error){
        res.send(error)
        
    }
   
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
},test:(req,res)=>{
    res.send("hello")
}
}