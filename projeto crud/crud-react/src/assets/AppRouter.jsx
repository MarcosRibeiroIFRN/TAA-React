import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "../paginas/home"

function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element={<Home/>}/>
            </Routes>
        
        </BrowserRouter>
    );
}
export default AppRouter