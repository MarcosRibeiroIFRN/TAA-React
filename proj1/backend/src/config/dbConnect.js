import mongoose from "mongoose";

// const options ={
//     useNewurlParser:true,//utilização de novo parser do Mongo
//     // poolSize:5,// quantidade de conexões
//     // userUnifedTopology:true,//utilização de nova gerência de conexãoes com o cluster
//     socketTimeoutMS: 60000 //esperar até 45 segundos para encerrar a espera de um comando ou consulta no mongodb
// }

/**
 * Open connection with MongoDB Atlas by Mongoose
 * @return {object} connection
 */
async  function dbConnect(){
    try{
        await mongoose.connect(process.env.STRING_CONNECTION)
        console.log("MongoDb connected")
    }
    catch (error){
        console.log("Connection error with MongoDB: ",error)
       process.exit(1);
    }
}

export default dbConnect;