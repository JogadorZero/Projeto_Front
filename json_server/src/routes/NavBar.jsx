import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div>
            <span style={{padding: '8px'}}><Link to='/'>Início</Link></span>
            <span style={{padding: '8px'}}><Link to='/signup'>Cadastrar</Link></span>
        </div>
    )
}