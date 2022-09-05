import Customer from "../models/Customer.js"

export const createUser = async (req,res,next)=>{
    const newCustomer = new Customer(req.body)
    try {
        const savedCustomer = await newCustomer.save()
        res.status(200).json(savedCustomer)
    } catch (error) {
        next (error)
    }
}

export const getAllCustomers = async (req,res,next)=>{
    try {
        const customers = await Customer.find();
        res.status(200).json(customers)
    } catch (error) {
        next(error)
    }
}


