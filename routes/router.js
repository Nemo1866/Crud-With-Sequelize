const router=require("express").Router()
const {createProduct,getProducts,getProductsById,updateProduct,deleteProduct, test}=require("../Controller/controller")


router.post("/",createProduct)
router.get("/",getProducts)
router.get("/:id",getProductsById)
router.patch("/:id",updateProduct)
router.delete("/:id",deleteProduct)
router.get('/test',test)

module.exports=router