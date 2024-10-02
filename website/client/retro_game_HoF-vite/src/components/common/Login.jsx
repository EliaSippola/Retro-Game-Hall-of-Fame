import { useNavigate } from 'react-router-dom'
import './Login.css'

export function Login({state}) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    }

    return (
        <>
        {state == 1 ?
            <div id='login' onClick={handleClick}><p>Login</p></div>
            :
            <></>
        }
        </>
    )
}