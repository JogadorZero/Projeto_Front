import React, { useState } from 'react'

export default function Signup() {
    const [user, setUser] = useState("")
    const [passwaord, setPassword] = useState("")

    //Cadastrar usuário
    const handleSignup = (e) => {
        e.preventDefault()

        console.log("Usuário cadastrado:", { user, password })
    }

    return (
        <div className='container'>
            <h2>Criar uma Conta</h2>
            <form onSubmit={handleSignup}>
                <label className='form-label' htmlFor='usuario'>Usuário</label>
                <input className='form-input' value={user} type='text' name='usuario' onChange={(e) => setUser(e.target.value)} required />
                <label className='form-label' htmlFor='senha'>Senha</label>
                <input className='form-input' value={passwaord} type='password' name='senha' onChange={(e) => setPassword(e.target.value)} required />
                <input className='form-submit' type='submit' value='Casdastrar' />
            </form>
        </div>
    )
}