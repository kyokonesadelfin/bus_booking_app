import express from "express";
import { countByBusLiner, countByDestination, createBusTrip, getAllBusTrip } from "../controllers/availTripsController.js";


const router = express.Router();

//Create
router.post("/", createBusTrip);

//Get All
router.get("/", getAllBusTrip);
router.get("/countByDestination", countByDestination);
router.get("/countByBusLiner", countByBusLiner);


export default router