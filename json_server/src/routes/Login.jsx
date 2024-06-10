import React, { useState } from 'react';

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const saveLogin = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:3000/users?user=${user}&password=${password}`);
    const data = await res.json();

    if (data.length > 0) {
      console.log("Usuário logado:", data[0]);
      // Atualizar estado de autenticação e redirecionar
    } else {
      console.error("Usuário ou senha incorretos");
    }
  };

  return (
    <div className='container'>
      <h2>Fazer Login</h2>
      <form onSubmit={saveLogin}>
        <label className='form-label' htmlFor="usuario">Usuário</label>
        <input className='form-input' value={user} type="text" name="usuario" onChange={(e) => setUser(e.target.value)} required />
        <label className='form-label' htmlFor="senha">Senha</label>
        <input className='form-input' value={password} type="password" name="senha" onChange={(e) => setPassword(e.target.value)} required />
        <input className='form-submit' type="submit" value="Entrar" />
      </form>
    </div>
  );
}
