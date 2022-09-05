import Bookings from "../models/Bookings.js";


export const createBooking = async (req,res,next)=>{
    const newBooking = new Bookings(req.body)
    try {
        const savedBooking = await newBooking.save()
        res.status(200).json(savedBooking)
    } catch (error) {
        next (error)
    }
}

export const getAllBookings = async (req,res,next)=>{
    try {
        const bookings = await Bookings.find();
        res.status(200).json(bookings)
    } catch (error) {
        next(error)
    }
}








