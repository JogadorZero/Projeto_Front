import React, { useState } from "react"
export default function Login({usuario, senha, handleSenha, handleUsuario}){
    return (
        <>
            <div className="container">
            <h2>Casdastro de Usuário</h2>
            <form onSubmit={saveProduct}>
                <label for="Nome">Usuario:</label>
                <input type="text" name="Usuario" value={usuario} required onChange={(e) => handleUsuario(e)}/>
                <label for="password">Senha:</label>
                <input type="text" name="Senha" value={senha} required onChange={(e) => handleSenha(e)}/>
            </form>
            </div>
        </>
    )
}

