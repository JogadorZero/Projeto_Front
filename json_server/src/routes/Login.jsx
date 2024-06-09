import React, { useState } from "react"

export default function Login(){
    const [user, setUser] = useState("")
    const [passwaord, setPassword] = useState("")

    //Salvar
    const saveUser = (e) => {
    e.preventDefault();
    }
    return (
        <>
            <div className='container'>
                <h2>Fazer Login</h2>
                <form onSubmit={saveUser}>
                    <label className='form-label' htmlFor="usuario">Usuario</label>
                    <input className='form-input' value={user} type="text" name="usuario" onChange={(e) => setUser(e.target.value)} required/>
                    <label className='form-label' htmlFor="senha">Senha</label>
                    <input className='form-input' value={passwaord} type="password" name="senha" onChange={(e) => setPassword(e.target.value)} required/>
                    <input className='form-submit' type="submit" value="Cadastrar" />
                </form>
            </div>
        </>
    )
}