import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/Auth'; // Certifique-se de que o caminho está correto

const RotaProtegida = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default RotaProtegida;