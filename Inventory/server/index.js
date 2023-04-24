import express from 'express';
import cors from "cors";
import model from './models/add_med.js'
import db from './db.js'
import pattern from './models/add_med.js';
import Routes from './routes.js'

const app= express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT= 8000;
app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});
db();
app.use('/', Routes);

