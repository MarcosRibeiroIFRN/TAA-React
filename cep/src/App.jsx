import { useState } from 'react'
import './App.css'

function App() {


  //criando objeto vazio para o state
  const [endereco, setEndereco] = useState({});

  function buscarEndereço(cep){
    fetch(`http://viacep.com.br/ws/${cep}/json`).
    then(resposta=> resposta.json()).
    then(dados=>{
      const {cep,logradouro,bairo}=dados;
      setEndereco({cep,logradouro,bairo})
    });
  }

  const digitarvalidarCep=(evento)=>{
    let cep = evento.target.value;
    //passando uma variável pra dentro deste objeto
    setEndereco({cep});
    
    if (cep !==" " && cep.length == 8){
      buscarEndereço(cep);
    }
  }

  return (
    <>
    <h1>Consulta CEP</h1>
    <input type ="text" placeholder='Digite o CEP' onChange={digitarvalidarCep}/>
    <h3>{endereco.cep}</h3>
    
    </>
  );
}

export default App
