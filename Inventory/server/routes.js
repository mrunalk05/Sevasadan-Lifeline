import express from "express";
import { addUsers, addbed, deleteUser, editUser, getUserById, getUsers, getinven } from "./contr";
const router= express.Router();

router.post('/addbed', addbed);
router.get('/getinven', getUsers);
router.get('/getbed', getinven)
router.post('/addinven', addUsers);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.delete('/:id', deleteUser);
// router.post('/users', emailc);


export default router;