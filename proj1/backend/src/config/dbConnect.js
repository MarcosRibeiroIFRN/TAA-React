import mongoose from "mongoose";

/**
 * Open connection with MongoDB Atlas by Mongoose
 * @return {object} connection
 */
async  function dbConnect(){
    try{
        await mongoose.connect(process.env.STRING_CONNECTION)
        console.log("MongoDb connected")
        return mongoose.connection;
    }
    catch (error){
        console.log("Connection error with MongoDB: ",error)
       
    }
}

export default dbConnect;