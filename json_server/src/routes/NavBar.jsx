import './NavBar.css'
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function NavBar(){
    const location = useLocation()

    if (location.pathname === '/login' || location.pathname === '/signup') {
        return null
    }

    return(
        <nav className='navbar'>
            <div className='navbar-left'>
                <Link to='/'>
                    <img src='public\images\logo.jpeg' alt='Inicio' className='navbar-logo' />
                </Link>
            </div>
            <div className='navbar-right'>
                <Link to='/signup' className='nav-link'>Cadastrar</Link>
                <Link to='/login' className='nav-link'>Login</Link>
            </div>
        </nav>
    )
}