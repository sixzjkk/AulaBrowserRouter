import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Produto from './Produto'
import Oferta from './Oferta'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={ <Home/> }/>
        <Route path="/produto" element={ <Produto/> }/>
        <Route path="/oferta" element={ <Oferta/> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)