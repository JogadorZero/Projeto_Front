import React, { useState } from 'react'
import './Signup.css'
import { Link } from "react-router-dom"

export default function Signup() {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const saveSignup = async (e) => {
    e.preventDefault()
    const newUser = { user, password }

    const clearForm1 = () => {
        setUser("")
        setPassword("")
      }

    const res = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    if (res.ok) {
      console.log("Usuário cadastrado:", newUser)
      // Redirecionar ou limpar formulário após sucesso
      
    } else {
      console.error("Erro ao cadastrar usuário")
    }
    clearForm1()
    setEdit(false)
  };

  return (
    <div className='signup-container'>
      <h2>Criar Conta</h2>
      <form onSubmit={saveSignup}>
        <label className='form-label' htmlFor="usuario">Usuário</label>
        <input className='form-input' value={user} type="text" name="usuario" onChange={(e) => setUser(e.target.value)} required />
        <label className='form-label' htmlFor="senha">Senha</label>
        <input className='form-input' value={password} type="password" name="senha" onChange={(e) => setPassword(e.target.value)} required />
        <input className='form-submit' type='submit' value='Cadastrar' />
      </form>
      <Link to='/login' className='signup-text-link'>Já tem uma conta? Entre</Link>
    </div>
  );
}
