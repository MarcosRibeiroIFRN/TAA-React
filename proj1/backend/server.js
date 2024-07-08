import dotenv from "dotenv";
import app from "./src/app.js"
import dbConnect from "./src/config/dbConnect.js";


//chamar arquivos do .env
dotenv.config();
//fzr após o .env para n dar erro

dbConnect();

const PORT=process.env.PORT; 

app.listen(PORT,()=>{
    console.log("Server started...")
})