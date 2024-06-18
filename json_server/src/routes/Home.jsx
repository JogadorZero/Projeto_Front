import { Link } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'


export default function Home(){
    return(
        <div>
            <h2>Bem-vindo!</h2>
            <p>Escolha uma opção:</p>
            <div className='espaco'>
                <Link to="/login">
                    <input className='form-submit' type='submit' value='Entrar' />
                </Link>
                </div>
                <div className='espaco'>
                <Link to="/signup">
                <input className='form-submit' type='submit' value='Cadastrar' />
                </Link>
            </div>
        </div>
    )
}