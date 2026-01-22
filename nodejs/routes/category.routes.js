//! routing for categories

//! importing 
import express from 'express';
import { getAll, getById , createCategories , updateCategories , deleteCategories } from '../controllers/category.controller.js';

//! creating a router 
const router = express.Router()
//* get all
router.get("/",getAll );

//* get by id 
//! dynamic get by id 
router.get("/:id",getById);

//* create 
router.post("/", createCategories);

//* update
router.put("/:id", updateCategories);

//* delete
router.delete("/:id", deleteCategories);

export default router