import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignIn from './pages/SignIn';
import SignUp from "./pages/SignUp";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render( 
    <BrowserRouter>
    <Switch>
    <Route path="/" exact={true} component={App} />
    <Route path="/pages/SignIn" component={SignIn} />
    <Route path="/pages/SignUp" component={SignUp} />
    </Switch>
 </ BrowserRouter>,
    document.getElementById('root')
);
