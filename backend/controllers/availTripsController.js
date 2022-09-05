import AvailTrips from "../models/AvailTrips.js";


export const createBusTrip = async (req,res,next)=>{
    const newBusTrip = new AvailTrips(req.body)
    try {
        const savedBusTrip = await newBusTrip.save()
        res.status(200).json(savedBusTrip)
    } catch (error) {
        next (error)
    }
}

export const getAllBusTrip = async (req,res,next)=>{
    try {
        const busTrips = await AvailTrips.find();
        res.status(200).json(busTrips)
    } catch (error) {
        next(error)
    }
}

export const countByDestination = async (req,res,next)=>{
    const destinations = req.query.destinations.split(",")

    try {
        const list = await Promise.all(destinations.map(destination=>{
            return AvailTrips.countDocuments({destination:destination})
        }));
        res.status(200).json(list)
    } catch (error) {
        next(error)
    }
}

export const countByBusLiner = async (req,res,next) =>{

    try {
        const busLiner1 = await AvailTrips.countDocuments({busLiner: "dumbledore"});
        const busLiner2 = await AvailTrips.countDocuments({busLiner: "hermione"});
        const busLiner3 = await AvailTrips.countDocuments({busLiner: "dobby"});

        res.status(200).json([
            { busLiner: "dumbledore", count: busLiner1 },
            { busLiner: "hermione", count: busLiner2 },
            { busLiner: "dobby", count: busLiner3 }
        ]);
    } catch (error) {
        next(error)
    }
}


