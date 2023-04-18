import express from 'express';
import cors from "cors";
import model from './model.js'
import db from './db.js'
import pattern from './model.js';

const app= express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT= 8080;
app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});
db();
app.post('/add', async(req, res)=>{
    const boody= req.body;
    try{
        const newuser= new pattern(boody);
        console.log(newuser);
        await newuser.save();
    }
    catch(error){
        console.log('Error occured', error);
    }
});

app.get('/all', async(req, res)=>{
    try{
        const all = await pattern.find();
        // res.status(200).json(all);
        console.log(all); 
    }
    catch(error){
        console.log('Error Occured', error);
    }
});

