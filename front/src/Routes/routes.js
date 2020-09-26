import React from 'react';
import SignIn from '../pages/SignIn';
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AuthContext from '../store/authContext'

export default function Routes() {
return(
  <BrowserRouter>
    <Switch>
      <AuthContext>
    <Route path="/" exact component={SignIn} />
    <Route path="/signUp" component={SignUp} />
    <Route path="/home" component={Home} />
    </AuthContext>
    </Switch>
 </ BrowserRouter>
)
}
