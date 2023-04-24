import mongoose from "mongoose";

const bedschema= mongoose.Schema({
    room:{
        type: String,
        required: true
    },
    bed_no:{
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