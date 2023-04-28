import express from "express";
import { addUsers, addbed, deleteUser, editUser, getUserById, getUsers } from "./contr";
const router= express.Router();

router.post('/addbed', addbed);
router.get('/', getUsers);
router.post('/add', addUsers);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);
// router.post('/users', emailc);


export default router;