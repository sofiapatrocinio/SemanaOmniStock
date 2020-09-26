import React, {useContext, useState} from "react";
import './style.css'
import logo from '../../assets/img/Logo-01.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../store/authContext'

export default function SignUp({history}) {
    const { signUp } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');

    const logUp = async (event) => {
        event.preventDefault();
            if(password !== confirmPassword){
                alert("Senhas não correspondentes");
                return;
            }
            await signUp(name, email, password);
    }
    return(
        <div className="login-container">
            <div className="login-content">
            <img src={logo} alt="logo" width="250px"/>
            <p> Cadastrar meu estoque </p>
            <form className="form" onSubmit={logUp}>
            <input placeholder="Nome" onChange={(event) => setName(event.target.value)} />
            <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)}/>
            <input type="password" placeholder="Senha" onChange={(event) => setPassword(event.target.value)}/>
            <input type="password" placeholder="Confirmar Senha" onChange={(event) => setConfirmPassword(event.target.value)} />
            <button type="submit">Cadastrar</button>
            </form>
            <p>Já possui uma conta?</p>
            <Link to="/">Entrar</Link>
            </div>
        </div>
    )
}