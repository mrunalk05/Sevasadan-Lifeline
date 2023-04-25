import express from "express";
import bedmodel from "./models/add_bed";

const add_bed=async(req, res)=>{
    const bed= req.body;
    console.log(req.body);
    try{
        const newbed= new bedmodel({
            room: req.body.room,
            bed_no: req.body.bed_no,
            patient: req.body.patient
        });
        await newbed.save();
        res.json({newbed});

    }catch(error){
        console.log(error)
        res.json({message: error});
    }
}

export default add_bed;



