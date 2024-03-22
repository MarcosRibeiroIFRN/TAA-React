import { Button, Flex, Form, Input, Modal, Table } from "antd";
import Title from "antd/es/typography/Title";
import { useState,useEffect } from "react";
import TurmaService from "../../../Services/TurmaServices";


function Turma(){

    //hook setando a fonte de dados da tabela
    const [turmas,setTurmas]=useState([]);
    const [abrirModal,setAbrirModal]=useState(false);
    useEffect(()=>{
        const buscarTurmas = async()=>{
            try{

                const turmas = await TurmaService.listar();
                //atualização da tabela
                setTurmas(turmas);
            }catch(error){
                console.error("Erro ao buscar turmas",error);
            }
        }
        buscarTurmas();
    },[turmas]);
    //  renderizando as colunas
    const columns= [
        {title:"ID",dataIndex:"id",key:"id"},
        {title:"Nome",dataIndex:"nome",key:"nome"},
        {tittle:"Ações",dataIndex:"acoes",key: "acoes",
        render:(_,record)=>
            (<div>
                <Button onClick={()=>{editar(record)}}>Editar</Button>
                <Button type="primary" danger onClick={()=>{editar(record)}}>Excluir</Button>
            </div>
            )
    }
    ]

    const [form]=Form.useForm();
    const salvarTurma=()=>{
        // then pro formulário preenchido e catch para o nao preenchido
        form.validateFields().then(
            async(values)=>{
                //salvando o valor usando o turma service
                await TurmaService.salvar(values);
                //fecha o modal
                setAbrirModal(false);
                //resetando o formulário
                form.resetFields();
            }
        ).catch(erro=>{
            console.log(erro)
        })
        
    }

    return(
        <>
            <Title level={3}>Turmas</Title>
            <Flex justify="end" style={{marginBottom:10}}>
                <Button type="primary" onClick={()=>{setAbrirModal(true)}}>Novo</Button>

            </Flex>
            <Table dataSource={turmas} columns={columns}/>
            <Modal
                title="Turma" 
                open={abrirModal}
                //garantir que o x do modal vai fechar ele
                onCancel={()=>{setAbrirModal(false)}}
                footer={(
                    <>
                    <Button onClick={()=>{setAbrirModal(false)}}>Cancelar</Button>
                    <Button onClick={salvarTurma} type="primary">Enviar</Button>
                    </>
                )}>
                    <Form form={form}>
                        <Form.Item
                        name="Nome"
                        label="Nome da turma"
                        rules={[{required: true,
                        message :"Por favor insira o nome da turma",
                        }]}>
                            <Input placeholder="Digite o nome da turma"/>
                            
                        </Form.Item>
                    </Form>

            </Modal>
        </>
    );
}
export default Turma;