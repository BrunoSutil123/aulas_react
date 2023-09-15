import Pagina_1 from 'react'
import Pagina_2 from 'react'  
import React from 'react'

import {BrowserRouter} from "react-router-dom"
import Router from "./router"

function App() {
  return (
      <BrowserRouter>
        <Router/>               
      </BrowserRouter>    
  )
}

export default App