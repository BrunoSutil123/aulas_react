import{ Routes, Route } from "react-router-dom"  /*1° é o que fica em volta das rotas e o 2 é o a rota da página em si */

import Home from "./pages/Home"
import Usuarios from "./pages/Usuarios"

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/usuarios" element={<Usuarios/>} />
        </Routes>
    )
}


export default Router