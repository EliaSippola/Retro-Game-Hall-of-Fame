import { useNavigate } from 'react-router-dom'
import './Login.css'
import { getUser, setUser } from '../../methods/userData';
import { useEffect, useState } from 'react';

export function Login() {

    const navigate = useNavigate();
    const user = getUser();
    const [active, setActive] = useState(false);

    const handleLoginClick = () => {
        navigate('/login');
    }

    const handleUserClick = () => {
        active ? setActive(false) : setActive(true);
    }

    const handleLogoutClick = () => {
        setUser('', '');
        setActive(false);
        navigate('/');
    }

    const handleUserSiteClick = () => {
        setActive(false);
        navigate('/account');
    }

    const closeMenu = (e) => {
        if(!e.target.closest("#login")) {
            setActive(false);
        }
    }

    useEffect(() => {
        window.addEventListener("click", closeMenu);
    });

    return (
        <>
        {user._id == "" ?
            <div id='login' onClick={handleLoginClick}><p>Login</p></div>
            :
            <div>
            <div id='login' onClick={handleUserClick}><p>{user.username}</p></div>
            {active ?
                <div className='user-dropdown-content'><p onClick={handleLogoutClick}>Log out</p><p onClick={handleUserSiteClick}>Account</p></div>
                :
                <></>
            }
            </div>
        }
        </>
    )
}