import { Button, Form, Input, Modal } from "antd";
import TurmaService from "../../../Services/TurmaServices";


function TurmaModal({abrirModal,setAbrirModal,buscarTurmas}) {
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
                buscarTurmas();
            }
        ).catch(erro=>{
            console.log(erro)
        })
        
    }
    return(
        <>
            <Modal
                title="Turma" 
                open={abrirModal}
                //garantir que o x do modal vai fechar ele
                onOk={()=>{setAbrirModal(false)}}
                onCancel={()=>{setAbrirModal(false)}}
                footer={(
                    <>
                    <Button onClick={()=>{setAbrirModal(false)}}>Cancelar</Button>
                    <Button onClick={turmasalvarTurma} type="primary">Enviar</Button>
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
export default TurmaModal;