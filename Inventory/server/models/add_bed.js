import mongoose from "mongoose";

const bedschema= new mongoose.Schema({
    room:{
        type: String,
        required: true
    },
    bedno:{
        type: String,
        required: true
    },
    // status:{
    //     type:Boolean,
    //     default: false
    // },
    patient:{
        type: String,
        required: true
    },
    // discharge:{
    //     type: Date,
    //     // required: true
    // }
});

const bedmodel= mongoose.model('beds', bedschema);
export default bedmodel;