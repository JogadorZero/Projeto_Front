import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/Auth'

const RotaProtegida = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return children
};

export default RotaProtegida