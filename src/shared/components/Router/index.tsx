import { Routes,Route } from "react-router-dom";
import { Home } from "../../../modules/Home";
import { Skills } from "../../../modules/Skills";
import { Projects } from "../../../modules/Projects";
function Router() {
    return (
        <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/projects' element={<Projects/>}/>
        </Routes>
    )
}


export {
    Router
}