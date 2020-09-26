import React from 'react';
import SignIn from '../pages/SignIn';
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export default function Routes() {
return(
  <BrowserRouter>
    <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/pages/SignUp" component={SignUp} />
    <Route path="/pages/Home" component={Home} />
    </Switch>
 </ BrowserRouter>
)
}
