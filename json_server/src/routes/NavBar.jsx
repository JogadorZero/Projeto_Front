import './NavBar.css'
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

export default function NavBar(){
    const location = useLocation()

    if (location.pathname === '/login') {
        return null
    }

    return(
        <nav className='navbar'>
            <Link to='/' className='nav-link'>Início</Link>
            <Link to='/signup' className='nav-link'>Cadastrar</Link>
            <Link to='/product-table' className='nav-link'>Produtos</Link>
        </nav>
    )
}