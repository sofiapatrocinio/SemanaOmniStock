import React, {createContext, useEffect, useState} from "react";
import SessionService from '../services/Session'
import { useHistory } from 'react-router-dom'

export const AuthContext = createContext();

export default function AuthContextProvider({children}){
    const history = useHistory();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem("@auth:user");
        if (userFromLocalStorage){
            setUser(JSON.parse(userFromLocalStorage));
        }
    }, []);

const signIn = async (email, password) => {
    try {
        const response = await SessionService.login(email, password);

        localStorage.setItem("@auth:token", response.headers["x-auth-token"]);
        localStorage.setItem("@auth:user", JSON.stringify(response.data));
        setUser(response.data);
        history.push("/home");
    } catch (error) {
        console.log(error);
        alert(error?.response?.data?.message || "Não foi possível realizar seu login");
    };
}

const signOut = () => {
    console.log("AAAAAAAAAAAAAAAAAAAAAA");
    localStorage.clear();
    setUser(null);
    history.push("/");
}

const signUp = async (name, email, password) => {
    try {
        const response = await SessionService.logUp(name, email, password);
        localStorage.setItem("@auth:token", response.headers["x-auth-token"]);
        localStorage.setItem("@auth:user", JSON.stringify(response.data));
        setUser(response.data);
        history.push("/home");
    } catch(error){
        alert(error?.response?.message || "Não foi possível concluir seu cadastro");
    };
}
    
    return( <AuthContext.Provider value={{ signIn, signUp, signOut, user, isUserLogged: !!user }}>
        {children}
    </AuthContext.Provider>
    );
}
