import React, { useState } from "react"

export default function Login(){
    const [user, setUser] = useState("")
    const [passwaord, setPassword] = useState("")
    return (
        <>
            <div className='container'>
        <h2>Cadastro de Usuários</h2>
        <form onSubmit={(e) => saveProduct(e)}>
            <label className='form-label' htmlFor="usuario">Usuario</label>
            <input className='form-input' value={usuario} type="text" name="usuario" onChange={(e) => setUser(e.target.value)} required/>
            <label className='form-label' htmlFor="senha">Senha</label>
            <input className='form-input' value={senha} type="text" name="senha" onChange={(e) => setPassword(e.target.value)} required/>
            <input className='form-submit' type="submit" value="Cadastrar" />
        </form>
            </div>
        </>
    )
}