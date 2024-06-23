import React from 'react'
import './Footer.css'
import { useLocation } from "react-router-dom"

export default function Footer() {
  const location = useLocation()

    if (location.pathname === '/login' || location.pathname === '/signup') {
        return null
    }

  return (
    <footer className="footer">
      <p>© 2024 KL Ltda. Todos os direitos reservados.</p>
    </footer>
  );
}
