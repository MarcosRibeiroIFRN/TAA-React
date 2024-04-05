import { useEffect,useState } from "react";

const AlunoTabela=()=>{
    const [alunos,setAlunos]=useState([]);

    useEffect(()=>{
        buscarAlunos();
    },[])
    const buscarAlunos=async ()=>{
        try {
            const dados = await AlunoService.listar();
            setAlunos(dados)
        }catch(error){
            console.error("Erro na busca de alunos: ",error)
        }
    }

    return (<h1>Me mame</h1>)
}
export default AlunoTabela