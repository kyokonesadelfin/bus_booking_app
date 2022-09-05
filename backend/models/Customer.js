import mongoose from 'mongoose';
const { Schema } = mongoose;

const CustomerSchema = new mongoose.Schema({
    username : {type : String, required : true},
    email : {type : String, required : true},
    password: {type : String, required : true},
    phoneno : {type : String, required : true},
    isAdmin: {
        type: Boolean,
        default: false
    }
    
}, {timestamps:true});

export default mongoose.model("Customers", CustomerSchema)