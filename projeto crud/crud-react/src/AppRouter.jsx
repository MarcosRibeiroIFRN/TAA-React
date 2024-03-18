import {BrowserRouter,Route,Routes} from "react-router-dom"
import Base from "./paginas/Base/Base.jsx";
import Home from "./paginas/Home/Home"
import NaoEncontrada from "./paginas/NaoEncontrada";
import Turma from "./paginas/Cadastros/Turma/TurmaTabela.jsx";

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base/>}>
                    <Route index element={<Home/>}/>
                    <Route path="*" element={<NaoEncontrada/>}/>
                    <Route path="/turmas" element={<Turma/>}/>
                </Route>
            </Routes>        
        </BrowserRouter>
    );
}
export default AppRouter