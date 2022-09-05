import mongoose from 'mongoose';
const { Schema } = mongoose;

const BookingsSchema = new mongoose.Schema({
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    busName: {
        type: String,
        required: true
    },
    busLiner: {
        type: String,
        required: true
    },
    tripsDates: {
        type: Date ,
        min: '2022-08-01',
        max: '2022-12-25',
        required: false
    },
    
}, {timestamps: true}); 



export default mongoose.model("Bookings", BookingsSchema)




