import mongoose from "mongoose";
import express from 'express'
mongoose.set('strictQuery', false);


const connection= async()=>{
    const URL= `mongodb+srv://mrunal:abcd@cluster0.hlkdohh.mongodb.net/test`;
    try{
       await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true});
       console.log('Database Connected!')
    }
    catch(error){
        console.log('Error');
    }
}

export default connection;