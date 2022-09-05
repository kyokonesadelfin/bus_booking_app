import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import customersRoute from "./routes/customers.js";
import bookingsRoute from "./routes/bookings.js";
import availTripsRoute from "./routes/availTrips.js";
import cookieParser from "cookie-parser";
import cors from "cors";



const app = express();
dotenv.config();

const connect = async () => {
try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Connected to MongoDB!")
} catch (error) {
    throw (error);
}
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!")
})
// mongoose.connection.on("connected", ()=>{
//     console.log("mongoDB connected!")
// })

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(express.urlencoded({ extended: false }));
app.use(allowCrossDomain);

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/customers", customersRoute);
app.use("/api/bookings", bookingsRoute);
app.use("/api/availTrips", availTripsRoute);


app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

app.get('/logout', (req, res) => {
	res.clearCookie("jwt", {path : '/'})
	res.status(200).send("User Logged Out")
}) 


app.listen(9000, () => {
    connect()
    console.log('Connected to Backend!')
})
