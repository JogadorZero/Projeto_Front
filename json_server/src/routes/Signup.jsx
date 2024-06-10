import React, { useState } from 'react';

export default function Signup() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const saveSignup = async (e) => {
    e.preventDefault();
    const newUser = { user, password };

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
      console.log("Usuário cadastrado:", newUser);
      // Redirecionar ou limpar formulário após sucesso
    } else {
      console.error("Erro ao cadastrar usuário");
    }
    clearForm1()
    setEdit(false)
  };
