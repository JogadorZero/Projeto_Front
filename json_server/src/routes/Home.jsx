import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <div>
            <h2>Bem-vindo!</h2>
            <p>Escolha uma opção:</p>
            <div>
                <Link to="/login">
                    <button>Entrar</button>
                </Link>
                <Link to="/signup">
                    <button>Cadastrar</button>
                </Link>
            </div>
        </div>
    )
}