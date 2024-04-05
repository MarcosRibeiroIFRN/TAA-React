const express = require("express");
const executarComandosSQL=require("../util/sql")

const router = express.Router();

router.get("/",(req, res) => {
    let sql = "select * from aluno";
    executarComandosSQL(sql, [], res, 
        "Erro na consulta de alunos");
});

router.get("/:id",(req, res) => {
    let id = req.params.id;
    let sql = "select * from aluno where id = ?";
    executarComandosSQL(sql, [id], res, 
        "Erro na consulta de uma aluno");
});
  
router.post("/", (req, res) => {
    const {nome,email,dataNascimento,turmaId} = req.body;
    let sql = "insert into aluno(nome,email,data_nascimento,turma_id) values (????)";
    executarComandosSQL(sql,[nome,email,dataNascimento,turmaId],res,"Erro na inserção de aluno");
});

router.put("/:id", (req, res) => {
    let id = req.params.id;
    const {nome,email,dataNascimento,turmaId} = req.body;
    let sql = "update aluno set nome = ?,email=?,data_nascimento=?,turma_id? where id = ?";
    executarComandosSQL(sql,[nome,email,dataNascimento,turmaId,id],res,"Erro na update de aluno");
});

router.delete("/:id", (req, res) => {
    let id = req.params.id;
    let sql = "delete from aluno where id = ?";
    executarComandosSQL(sql,[id],res,"Erro na exclusão de aluno");
});

module.exports = router;
