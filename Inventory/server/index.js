import express from 'express';
import cors from "cors";
import db from './db.js'
import Routes from './routes.js'
import nodemailer from 'nodemailer';
import path from 'path';
import bodyParser from 'body-parser';

const app= express();
const buildPath = path.join(new URL('../build', import.meta.url).pathname);
app.use(express.static(buildPath)); 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT= 8080;
app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});
db();
// app.use(bodyParser());
app.use('/', Routes);

