import React from "react";
import './style.css'
import logo from '../../assets/img/Logo-01.png'
import { Link } from 'react-router-dom'

export default function SignIn() {
    return(
        <div className="login-container">
            <div className="login-content">
            <img href="/" src={logo} alt="logo" width="250px"/>
            <p> Entrar em meu estoque </p>
            <div className="form">
            <input placeholder="Email"/>
            <input placeholder="Senha"/>
            <button>Entrar</button>
            </div>
            <p>Não possui uma conta?</p>
            <Link to="/pages/SignUp">Cadastre-se</Link>
            </div>
        </div>
    )
}