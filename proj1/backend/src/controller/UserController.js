import User from "../models/User.js"
import bcrypt from "bcryptjs"


/**
 * Createuser
 * @param {*} req 
 * @param {*} res 
 */
export async function createUser(req,res){
    try{
        //desestruturando
        const{username,email,password}=req.body;
        const hashPassword=await bcrypt.hash(password,12);
        const newUser= new User({username,email,password:hashPassword});
        await newUser.save();
        res.status(201).json({Username,email});
    }catch(error){
        res.staus(500).json({message:error.message});
    }
}