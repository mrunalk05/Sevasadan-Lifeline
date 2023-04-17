import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';
autoIncrement.initialize(mongoose.connection);
const patternSchema= mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    disease:{
        type: String,
        required: true
    }
});

patternSchema.plugin(autoIncrement.plugin, 'patternn');
const patternn= mongoose.model('patternn', patternSchema);


export default patternn;