const express=require("express");
const turmaController=require(./controllers/TurmaController)
const cors=require(cors);
const app=express()


app.use(express.json());

app.use(cors());


//ouvindoi a porta
app.listen(3000,()=>{
    console.log("Servidor conectado")
})