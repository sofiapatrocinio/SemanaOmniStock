import React from "react";
import './style.css'
import logo from '../../assets/img/Logo-01.png'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return(
        <div className="login-container">
            <div className="login-content">
            <img src={logo} alt="logo" width="250px"/>
            <p> Cadastrar meu estoque </p>
            <div className="form">
            <input placeholder="Nome"/>
            <input placeholder="Email"/>
            <input placeholder="Senha"/>
            <input placeholder="Confirmar Senha"/>
            <button>Cadastrar</button>
            </div>
            <p>Já possui uma conta?</p>
            <Link to="/pages/SignIn">Entrar</Link>
            </div>
        </div>
    )
}