import { Button, Form, Input, Modal } from "antd";
import TurmaService from "../../../Services/TurmaServices";
import { useEffect } from "react";



const TurmaModal = ({abrirModal, 
                     setAbrirModal, 
                     buscarTurmas, 
                     turmaEditada, 
                     setTurmaEditada}) => {

    const [form] = Form.useForm();

    useEffect(()=>{
        if (turmaEditada && abrirModal){
            form.setFieldsValue({
                nome : turmaEditada.nome
            });
        }else{
            form.resetFields();
        }
    },[turmaEditada, abrirModal]);

    const salvarTurma = () => {
        form.validateFields().then(
            async (values) => {
                if (turmaEditada){
                    await TurmaService.atualizar(turmaEditada.id, values);
                }else{
                    await TurmaService.salvar(values);
                }
                setAbrirModal(false);
                form.resetFields();
                buscarTurmas();
                setTurmaEditada(null);
                //Outra opção
                //window.location.reload();
            }
        ).catch(erro => {
            console.log(erro);
        })
    }

    return (
        <>
            <Modal
                title="Turma" 
                open={abrirModal}
                onOk={()=>{setAbrirModal(false)}}
                onCancel={()=>{setAbrirModal(false)}}
                footer={(
                    <>
                        <Button onClick={()=>{setAbrirModal(false)}}>Cancelar</Button>
                        <Button onClick={salvarTurma} type="primary">
                            {turmaEditada ? "Atualizar" : "Cadastrar" }
                        </Button>
                    </>
                )}>

                    <Form form={form} layout="vertical" name="turmaForm">
                        <Form.Item 
                            name="nome"
                            label="Nome da turma"
                            rules={[{required : true, 
                                     message : "Por favor, insira o nome da turma"}]}
                            >
                            <Input placeholder="Digite o nome da turma"/>    
                        </Form.Item>
                    </Form>
            </Modal>
        </>
    );    
}
/*
function TurmaModal(){
    return ();
}
*/

export default TurmaModal;