import mongoose from "mongoose";
import { stringify } from "uuid";
const userSchema = new mongoose.Schema({
    //modelo de dados do usuário
    username:{type:stringify,required:[true,"Obrigatory field username"]},
    email:{type:String, required:[true,"Obrigatory field email"]},unique:[true,"Email already exists"],
    password:{type:String, required:[true, "Obrigatory field password"]},
    profile:{type: mongoose.Schema.Types.ObjectId,ref:"profile"}},
    {versionKey:false, timestamps:true}
    );

const User=mongoose.model("User",userSchema);
export default User;
