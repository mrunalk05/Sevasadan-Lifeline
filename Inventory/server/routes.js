import express from "express";
import add_bed from "../server/contr.js"
const router= express.Router();


router.post('/add_bed', add_bed);


export default router;