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



