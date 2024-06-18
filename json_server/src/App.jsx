import { useState, useEffect } from 'react'
import './App.css'
import ProductTable from './components/ProductTable'
import ProductForm from './components/ProductForm'
import NavBar from './routes/NavBar'
import { Outlet, useNavigate } from 'react-router-dom'

function App() {  
  
  return (
    <>
      <NavBar/>
      <Outlet /> {/*Onde componentes filhos serão renderizados*/}
    </>
  )
}

export default App
