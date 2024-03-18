import { Table } from "antd";
import { useState,useEffect } from "react";
import TurmaService from "../../../Services/TurmaServices";


function Turma(){

    //hook setando a fonte de dados da tabela
    const [turmas,setTurmas]=useState([]);

    useEffect(()=>{
        const buscarTurmas = async()=>{
            try{
            const turmas = await TurmaService.listar();
            //atualização da tabela
            setTurmas(turmas);
            }catch(error){
                console.error("Erro ao buscar turmas");
            }
        }
        buscarTurmas();
    },[turmas]);
    //  renderizando as colunas
    const columns= [
        {title:"ID",dataIndex:"id",key:"id"},
        {title:"Nome",dataIndex:"nome",key:"nome"}
    ]

    return(
        <>
            <Table dataSource={turmas} columns={columns}/>
        </>
    );
}
export default Turma;