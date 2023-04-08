import { useState } from "react"
import Welcome from './Welcome'

const Login = () => {
    const [ login, setlogin] = useState(false);
    return (
       <>
        <Welcome login ={ login } />
        { login ? <li><a onClick={ () => { setlogin(false)} }>Logout</a></li>: <li><a onClick={ () => { setlogin(true) } }>Login</a></li>}

       </>
    );
}
export default Login