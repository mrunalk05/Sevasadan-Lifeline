import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';
// autoIncrement.initialize(mongoose.connection);
const patternSchema= mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    disease:{
        type: String,
        required: true
    }
});

// patternSchema.plugin(autoIncrement.plugin, 'patternn');
const patternn= mongoose.model('patternn', patternSchema);
// await mongoose.model('patternn').findOne();

export default patternn;