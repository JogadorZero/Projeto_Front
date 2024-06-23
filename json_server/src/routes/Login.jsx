import './Login.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/Auth'
import { Link } from "react-router-dom"

export default function Login() {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { login } = useAuth()

  const saveLogin = async (e) => {
    e.preventDefault()

    const res = await fetch(`http://localhost:3000/users?user=${user}&password=${password}`)
    const data = await res.json()

    // Atualizar estado de autenticação e redirecionar
    if (data.length > 0) {
      console.log("Usuário logado:", data[0])
      login()
      // Redirecionar para a página de cadastro de produto
      navigate('/product-table') // Atualize para a rota correta do seu formulário de produtos
    } else {
      console.error("Usuário ou senha incorretos")
    }
  }

  return (
    <div className='login-container'>
      <h2>Fazer Login</h2>
      <form onSubmit={saveLogin}>
        <label className='form-label' htmlFor="usuario">Usuário</label>
        <input className='form-input' value={user} type="text" name="usuario" onChange={(e) => setUser(e.target.value)} required />
        <label className='form-label' htmlFor="senha">Senha</label>
        <input className='form-input' value={password} type="password" name="senha" onChange={(e) => setPassword(e.target.value)} required />
        <input className='form-submit' type="submit" value="Entrar" />
      </form>
      <Link to='/signup' className='signup-text-link'>Não tem uma conta? Cadastre-se</Link>
    </div>
  )
}