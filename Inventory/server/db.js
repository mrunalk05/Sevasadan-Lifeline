import mongoose from "mongoose";
import express from 'express'

const connection= async()=>{
    const URL= `mongodb+srv://Mrunal:Mrunal@cluster0.i0uy7fi.mongodb.net/?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL, ()=>{ console.log('Database Connected!')});
    }
    catch(error){
        console.log('Error');
    }
}

export default connection;