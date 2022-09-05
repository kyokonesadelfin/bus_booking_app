import express from "express";
import { createUser, getAllCustomers } from "../controllers/customerController.js";

const router = express.Router();

//Create
router.post("/", createUser);

//Get All
router.get("/", getAllCustomers);


export default router