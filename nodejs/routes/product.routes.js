//! routing for product
import express from 'express';
import {getAll,getById,createProduct,updateProduct,deleteProduct} from '../controllers/product.controller.js'
//! creating express router instance 
const router = express.Router()


//* get all products
router.get("/",getAll);

//* get by id
//! get by id
router.get("/:id", getById);

//*  create
router.post("/",createProduct);

//* update
router.put("/:id", updateProduct);

//* delete

router.delete("/:id",deleteProduct);

export default router