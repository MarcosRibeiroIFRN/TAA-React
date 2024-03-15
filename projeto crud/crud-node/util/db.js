const mysql = require('mysql');

const senhaBanco =process.env.SENHA_BANCO || "";

//configuração da conexão do banco
const configConexao={
    host : "localhost",
    user: "root",
    password: senhaBanco,
    database:"crud_react"

};

//conexao do banco
const conexao=mysql.createConnection(configConexao)

conexao.connect(err=>{
    if (err){
        console.log("Erro na conexão do banco");
        process.exit(1);
    }
    console.log("Banco conectado");
})
//exportando a conexão
module.exports=conexao;