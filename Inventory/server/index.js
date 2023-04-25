import express from 'express';
import cors from "cors";
import model from './models/add_med.js'
import db from './db.js'
import pattern from './models/add_med.js';
import Routes from './routes.js'
import bedmodel from './models/add_bed.js';

const app= express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT= 8000;
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
        const all = await pattern.find({});
        res.status(200).json(all);
        console.log(all); 
    }
    catch(error){
        console.log('Error Occured', error);
    }
});

app.post('/addbed', async(req, res)=>{
    const bed= req.body;
    console.log(bed);
    try{
        const newbed= new bedmodel(bed);
        await newbed.save();
        res.json({newbed});

    }catch(error){
        console.log(error)
        res.json({message: error});
    }
})

app.use('/', Routes);

