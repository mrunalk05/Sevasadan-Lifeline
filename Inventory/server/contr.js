import express from "express";
import bedmodel from "./models/add_bed";

const add_bed=async(req, res)=>{
    const bed= req.body;
    console.log(bed);
    try{
        const newbed= new bedmodel(bed);
        await newbed.save();
        res.json({newbed});

    }catch(error){
        res.json({message: error});
    }
}

export default add_bed;



// app.post('/add', async(req, res)=>{
//     const boody= req.body;
//     try{
//         const newuser= new pattern(boody);
//         console.log(newuser);
//         await newuser.save();
//     }
//     catch(error){
//         console.log('Error occured', error);
//     }
// });

// app.get('/all', async(req, res)=>{
//     try{
//         const all = await pattern.find({});
//         res.status(200).json(all);
//         console.log(all); 
//     }
//     catch(error){
//         console.log('Error Occured', error);
//     }
// });
