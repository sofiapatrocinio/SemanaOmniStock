import React, {useContext, useEffect} from "react";
import { AuthContext}  from '../../store/authContext'

export default function Home ({ history }) {
    const { signIn, isUserLogged } = useContext(AuthContext);

    useEffect(() => {
        if(!isUserLogged){
            history.push('/');
        }
    }, [isUserLogged]);

    const { user } = useContext(AuthContext);
    return(
        <div>
            <h1>{`Bem vinda, ${user?.name}`}</h1>
        </div>
    )
}