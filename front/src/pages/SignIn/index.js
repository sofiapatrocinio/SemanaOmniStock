import React, { useState, useContext, useEffect } from "react";
import './style.css'
import logo from '../../assets/img/Logo-01.png'
import { Link } from 'react-router-dom'
import { AuthContext}  from '../../store/authContext'

export default function SignIn({ history }) {
    const { signIn, isUserLogged } = useContext(AuthContext);
    const [email, setEmail] = useState('');;
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(isUserLogged){
            history.push('/home');
        }
    }, [isUserLogged]);

    const login = async (event) => {
        event.preventDefault();  
        await signIn(email, password);      
    };

    return(
        <div className="login-container">
            <div className="login-content">
            <img href="/" src={logo} alt="logo" width="250px"/>
            <p> Entrar em meu estoque </p>
            <form className="form" onSubmit={login}>
            <input type="email" placeholder="Email" onChange={(event) => {setEmail(event.target.value);}}/>
            <input type="password" placeholder="Senha" onChange={(event) => {setPassword(event.target.value);}}/>
            <button type="submit">Entrar</button>.
            </form>
            <p>Não possui uma conta?</p>
            <Link to="/signUp">Cadastre-se</Link>
            </div>
        </div>
    )
}