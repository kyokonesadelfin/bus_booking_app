import mongoose from 'mongoose';
const { Schema } = mongoose;

const AvailTripsSchema = new mongoose.Schema({
    busName : {type : String, required : true},
    model : {type : String}, 
    image: {type : String, required : true},
    desc: {
        type: String,
        required: true
    },
    busLiner: {type : String, required : true},
    rating: {
        type: Number,
        min:0,
        max:5
    },
    price: {
        type: Number,
        required: true
    },
    tripsDates: {
        type: Date ,
        min: '2022-08-01',
        max: '2022-12-25',
        required: false
    },

    source: {
        type: String,
        required: true
    },

    destination: {
        type: String,
        required: true
    },

    stops: {
        type: String,
        required: false
    },
    seatsAvail: {
        type: Number,
        required: false
    },


});

export default mongoose.model("AvailTrips", AvailTripsSchema)