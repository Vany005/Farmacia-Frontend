import React from 'react';
import './App.css';
import Home from './page/home/Home';

import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import NavBar from './components/navBar/NavBar';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';




function App() {
  return (
    <>
   <BrowserRouter>
        <NavBar />
        <div className='min-h-[90vh]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListaCategoria />} />
          <Route path="/cadastrarCategoria" element={<FormularioCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
);
}
export default App;