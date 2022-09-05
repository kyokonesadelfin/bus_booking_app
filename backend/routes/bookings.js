import express from "express";
import { createBooking, getAllBookings } from "../controllers/bookingsController.js";


const router = express.Router();

//Create
router.post("/", createBooking);

//Get All
router.get("/", getAllBookings);


export default router