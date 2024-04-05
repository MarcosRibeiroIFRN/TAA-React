import { Button, Flex, Input, Modal, Table, Form } from "antd";
import { useEffect, useState } from "react";
import TurmaService from "../../../services/TurmaServices";
import Title from "antd/es/typography/Title";
import TurmaModal from "./TurmaModal";

function TurmaTabela(){

    const [turmas, setTurmas] = useState([]);
    const [abrirModal, setAbrirModal] = useState(false);
    const [turmaEditada, setTurmaEditada] = useState(null);

    const buscarTurmas = async () => {
        try{
            const turmas = await TurmaService.listar();
            setTurmas(turmas);
        }catch(error){
            console.log("Erro ao buscar turmas", error);
        }
    }

    useEffect(() => {buscarTurmas()},[]);

    /*
        //Ele vai chamar a função sempre que for necessário 
        //renderizar o componente
        useEffect(function(){}) 

        //Ele vai chamar a função na primeira renderização do componente         
        useEffect(function(){},[]) 

        //Se houver mudança nas variáveis dependentes, ele chama a função
        useEffect(function(){},[turmas, segundaVariavel]) 
    
    */

    function editar(turma){
        setTurmaEditada(turma);
        setAbrirModal(true);
    }

    function excluir({id}){
        Modal.confirm({
            title : "Tem certeza que deseja excluir a turma?",
            content : "Você vai apagar a turma definitivamente!",
            okText : "Sim, excluir",
            okType : "danger",
            cancelText : "Cancelar",
            onOk(){
                TurmaService.excluir(id).then(()=>{
                    buscarTurmas();
                    //setTurmas(turmas.filter(turma => turma.id !== id));
                }).catch(()=>{
                    console.log("Falha ao excluir turma");
                });
            }
        });

    }

    const columns = [
        {title: "ID", dataIndex : "id", key : "id"},
        {title: "Nome", dataIndex : "nome", key : "nome"},
        {title: "Ações", 
         dataIndex : "acoes", 
         key: "acoes",
         render: (_, record) => (
            <div>
                <Button onClick={()=>{editar(record)}} >Editar</Button>
                <Button onClick={()=>{excluir(record)}}>Excluir</Button>
            </div>
            )         
        }
    ];
    

    return (
        <>
            <Title level={3}>Turmas</Title>
            <Flex justify="end" style={{marginBottom : 10}}>
                <Button type="primary" onClick={()=>{setTurmaEditada(null); setAbrirModal(true);}}>Novo</Button>
            </Flex>
            <Table dataSource={turmas} columns={columns}/>   

            <TurmaModal abrirModal={abrirModal} 
                        setAbrirModal={setAbrirModal} 
                        buscarTurmas={buscarTurmas}
                        turmaEditada={turmaEditada}
                        setTurmaEditada={setTurmaEditada}/>     
        </>
    );
}

export default TurmaTabela;