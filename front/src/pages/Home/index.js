import React, {useContext} from "react";
import { AuthContext}  from '../../store/authContext'

export default function Home () {
    const { user } = useContext(AuthContext);
    return(
        <div>
            <h1>{`Bem vinda, ${user?.name}`}</h1>
        </div>
    )
}