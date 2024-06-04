import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <div>
            <span style={{padding: '8px'}}><Link to={'/'}>Inicio</Link></span>
            <span style={{padding: '8px'}}><Link to={'/login'}>Login</Link></span>
            <span style={{padding: '8px'}}><Link to={'/home'}>Home</Link></span>
        </div>
    )
}