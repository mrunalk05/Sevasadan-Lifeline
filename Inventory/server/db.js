import mongoose from "mongoose";
import express from 'express'
mongoose.set('strictQuery', false);


const connection= async()=>{
    const URL= `mongodb://mrunalkhade35:Mrunal@ac-jf7vodi-shard-00-00.yltzx4s.mongodb.net:27017,ac-jf7vodi-shard-00-01.yltzx4s.mongodb.net:27017,ac-jf7vodi-shard-00-02.yltzx4s.mongodb.net:27017/?ssl=true&replicaSet=atlas-n2o0eb-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true});
       console.log('Database Connected!')
    }
    catch(error){
        console.log('Error');
    }
}

export default connection;