import{ Routes, Route } from "react-router-dom"

import Pagina_1 from "./pages/Pagina_1"
import Pagina_2 from "./pages/Pagina_2"

import React from 'react'

function router() {
  return (
        <Routes>
            <Route path="/" element={<Pagina_1/>} />
            <Route path="/Pagina_2" element={<Pagina_2/>} />
        </Routes>
  )
}

export default router