import React, { useState } from "react";
import './style.css'
import logo from '../../assets/img/Logo-01.png'
import { Link } from 'react-router-dom'
import SessionService from '../../services/Session'

export default function SignIn({ history }) {
    const [email, setEmail] = useState('');;
    const [password, setPassword] = useState('');
    const login = async (event) => {
        event.preventDefault();
        try {
            const response = await SessionService.login(email, password);
            history.push("/home");
            console.log(response);
        } catch (error) {
            console.log(error.response);
            alert(error?.response?.data.message || "Não foi possível realizar seu login");
        };
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
            <Link to="/pages/SignUp">Cadastre-se</Link>
            </div>
        </div>
    )
}