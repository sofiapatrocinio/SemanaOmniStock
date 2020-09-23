import React from 'react';
import SignIn from './pages/SignIn'
import './App.css';
import { Link } from 'react-router-dom'

function App() {
    // const [count, setCount] = useState(0);
    // console.log("app");

    // useEffect(() => {
    //     console.log("useEffect")
    // }, [count]);
    return ( 
        <div>
            <SignIn/>
        </div>
            );
    }

    export default App;