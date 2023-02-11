const router=require("express").Router()
const {createProduct,getProducts,getProductsById,updateProduct,deleteProduct}=require("../Controller/controller")


router.post("/",createProduct)
router.get("/",getProducts)
router.get("/:id",getProductsById)
router.patch("/:id",updateProduct)
router.delete("/:id",deleteProduct)

module.exports=router