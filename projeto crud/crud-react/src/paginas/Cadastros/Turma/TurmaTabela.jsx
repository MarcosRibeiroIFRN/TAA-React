import { Button, Flex, Form, Input, Modal, Table } from "antd";
// import { BsFillTrashFill } from "react-icons/bs";
import { AiFillFilter } from "react-icons/ai";
import Title from "antd/es/typography/Title";
import { useState,useEffect } from "react";
import TurmaService from "../../../Services/TurmaServices";
import TurmaModal from "./TurmaModal";


function Turma(){

    //hook setando a fonte de dados da tabela
    const [turmas,setTurmas]=useState([]);
    const [abrirModal,setAbrirModal]=useState(false);
    
    const buscarTurmas = async()=>{
        try{

            const turmas = await TurmaService.listar();
            //atualização da tabela
            setTurmas(turmas);
        }catch(error){
            console.error("Erro ao buscar turmas",error);
        }
    }

    useEffect(()=>{ buscarTurmas()},[]);



    function editar (registro){
        console.log(registro);
    }
    function excluir({id}){
        console.log(id)
        Modal.confirm({
            title:"Tem certeza de que deseja excluir a turma?",
            content: "Você vai apagar a turma definitivamente!",
            okText:"Sim, excluir",
            onType:"danger",
            cancelText:"Cancelar",
            onOk(){
                TurmaService.exluir(id.then(()=>{
                    const turmasAtualizadas=turmas.filter(turma=>turma.id != id);
                    setTurmas(turmasAtualizadas)

                    console.log(`Turma com id ${id}, excluída com sucesso.`)
                }).catch(()=>{})
                    
                );
            },
            onCancel(){}
        })
    }
    //  renderizando as colunas
    const columns= [
        {title:"ID",dataIndex:"id",key:"id"},
        {title:"Nome",dataIndex:"nome",key:"nome"},
        {tittle:"Ações",dataIndex:"acoes",key: "acoes",
        render:(_,record)=>
            (<div>
                <Button onClick={()=>{editar(record)}}>Editar</Button>
                <Button type="primary" danger onClick={()=>{editar(record)}}  ><AiFillFilter />Excluir</Button>
            </div>
            )
    }
    ]


    return(
        <>
            <Title level={3}>Turmas</Title>
            <Flex justify="end" style={{marginBottom:10}}>
                <Button type="primary" onClick={()=>{setAbrirModal(true)}}>Novo</Button>

            </Flex>
            <Table dataSource={turmas} columns={columns}/>
            <TurmaModal abrirModal={abrirModal} setAbrirModal={setAbrirModal} buscarTurmas={buscarTurmas}></TurmaModal>
        </>
    );
}
export default Turma;