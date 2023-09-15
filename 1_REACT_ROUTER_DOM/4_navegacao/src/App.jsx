  /*baixando a estenção es7+ React...   e digitando no APP (rfce) vc criará uma conexão*/
  /*para baixar o react routwer dom, precisamos ir no terminal e colocar npm i react-router-dom */


import {BrowserRouter} from "react-router-dom" /*mostrar pro navegador que dentro dele vai ter as rotas */

import Router from "./router"


function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App