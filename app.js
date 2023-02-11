const express=require("express")
const app=express()
const router=require("./routes/router")
require("./connections")


app.use(express.json())

app.use("/api/products",router)





app.listen(3030,()=>{
    console.log("Server is running on port 3030");
})