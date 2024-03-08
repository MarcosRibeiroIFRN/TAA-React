const express=require("express");
//importando banco de dados
const conexao = require("../util/db");

//criar requisições dentro do objeto router
const router= express.Router();

function executarComandosSQL(sql, params,res,erroMsg){
    conexao.query(sql,params,(err,result)=>{
        if(err){
            //status de erro com o status, a mensagem de erro e os detalhes
            res.status(500).json({erro:erroMsg,detalhes:err})
        }else{
            res.status(200).json(result);
        }
    })
}
 router.get("/",(req,res)=>{
    let sql = "select * from turma";
    executarComandosSQL(sql,[],res,"Erro na consulta da turma")
 })
router.post("/",(req,res)=>{
    const{nome}=req.body
    let sql="insert into turma (nome values (?)";
    executarComandosSQL(sql,[nome],res,"Erro na inserção de turmas")
})

 module.exports=router