import {BrowserRouter,Route,Routes} from "react-router-dom"
import Base from "./paginas/Base/Base.jsx";
import Home from "./paginas/Home/Home"
import NaoEncontrada from "./paginas/NaoEncontrada";
import TurmaTabela from "./paginas/Cadastros/Turma/TurmaTabela.jsx";
import AlunoTabela from "./paginas/Cadastros/Aluno/AlunoTabela.jsx";

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/turmas" element={<TurmaTabela/>}/>
                    <Route path="/alunos" element={<AlunoTabela/>}/>
                    <Route path="*" element={<NaoEncontrada/>}/>
                </Route>
            </Routes>        
        </BrowserRouter>
    );
}
export default AppRouter