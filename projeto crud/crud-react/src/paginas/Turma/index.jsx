import { Table } from "antd";
import { useState } from "react";


function Turma(){

    //setando a fonte de dados da tabela
    const [turmas,setTurmas]=useState([]);
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