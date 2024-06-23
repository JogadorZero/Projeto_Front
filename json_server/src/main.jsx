import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Signup from './routes/Signup.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RotaProtegida from './components/RotaProtegida.jsx'
import { AuthProvider } from './context/Auth'
import CadastroProduto from './routes/CadastroProduto.jsx'
import TabelaProdutos from './routes/TabelaProdutos.jsx'
import EditarProduto from './routes/EditarProduto.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home /> //Definindo Home como rota inicial
      },
      {
        path: 'home',
        element: <Home />, //Rota para a tela Home
      },
      {
        path: 'login',
        element: <Login />,//Rota para a tela de Login
      },
      {
        path: 'signup',
        element: <Signup />, //Rota para a tela de Cadastro
      },
      {
        path: 'product-table',
        element: (
          <RotaProtegida>
            <CadastroProduto/>
          </RotaProtegida>
        )
      },
      {
        path: 'product-form',
        element: (
          <RotaProtegida>
            <TabelaProdutos/>
          </RotaProtegida>
        )
      },
      {
        path: 'edit-product',
        element: (
          <RotaProtegida>
            <EditarProduto/>
          </RotaProtegida>
        )
      }

    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
