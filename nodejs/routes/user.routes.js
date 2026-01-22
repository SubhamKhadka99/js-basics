//! routing for user
import express from 'express';
import {createUsers, getAll, getById, updateUsers , deleteUsers} from '../controllers/user.controller.js'
//! creating express router instance 
const router = express.Router()


//* get all users
// http://localhost:8000 -> get
// http://localhost:8000/users/users
router.get("/",getAll);
//* get by id
//! get by id
router.get("/:id", getById);

//*  create
router.post("/",createUsers);

//* update
router.put("/:id", updateUsers);

//* delete

router.delete("/:id",deleteUsers);

export default router