const express=require("express");
const turmaController=require('./controllers/TurmaController')
const AlunosController=require('./controllers/AlunosController')
const cors=require("cors");
const app=express()


app.use(express.json());

app.use(cors());
app.use("/turmas",turmaController)
app.use("/alunos",AlunosController)

//ouvindoi a porta
app.listen(3000,()=>{
    console.log("Servidor conectado")
})