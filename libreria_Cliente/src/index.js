import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/estilo.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Articulos from './pages/Articulos'
import Nosotros from './pages/Nosotros'
import Contactos from './pages/Contacto'
import Servicios from './pages/Servicios'
import Login from './pages/Login';
import NoEncontrada from './pages/NoEncontrada'
import ClienteNuevo from './pages/ClienteNuevo'
import ListaClientes from './pages/ListaClientes'
import EditarClientes from './pages/EditarClientes'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App/> */}
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Inicio />} />
          <Route path='articulos' element={<Articulos />} />
          <Route path='nosotros' element={<Nosotros />} />
          <Route path='contacto' element={<Contactos />} />
          <Route path='servicios' element={<Servicios />} />
          <Route path='login' element={<Login />} />
          <Route path='ClienteNuevo' element={<ClienteNuevo />} />
          <Route path='ListaClientes' element={<ListaClientes />} />
          <Route path=":id" element={<EditarClientes />} />
          <Route path='*' element={<NoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
