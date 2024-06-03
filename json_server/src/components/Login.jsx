import React from "react"
import './ProductForm.css'

export default function Login({saveProduct,usuario, senha, handleSenha, handleUsuario}){
    return (
        <>
            <div className='container'>
        <h2>Cadastro de Produtos</h2>
        <form onSubmit={(e) => saveProduct(e)}>
            <label className='form-label' htmlFor="usuario">Usuario</label>
            <input className='form-input' value={usuario} type="text" name="usuario" onChange={(e) => handleUsuario(e)} required/>
            <label className='form-label' htmlFor="senha">Senha</label>
            <input className='form-input' value={senha} type="text" name="senha" onChange={(e) => handleSenha(e)} required/>
            <input className='form-submit' type="submit" value="Cadastrar" />
        </form>
            </div>
        </>
    )
}

