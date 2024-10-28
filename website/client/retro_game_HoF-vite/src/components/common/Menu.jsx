import { useNavigate } from 'react-router-dom'
import './Menu.css'
import image from './../../assets/Hamburger_icon.svg.png'
import { useEffect, useState } from 'react';


export function Menu({state}) {

    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const handleMenuClick = () => {
        active ? setActive(false) : setActive(true);
    }

    const handleGameListClick = () => {
        setActive(false);
        navigate('/');
    }

    const handleIntraClick = () => {
        setActive(false);
        navigate('/intra');
    }

    const closeMenu = (e) => {
        if(!e.target.closest("#menu")) {
            setActive(false);
        }
    }

    useEffect(() => {
        window.addEventListener("click", closeMenu);
    });

    return (
        <div>
            <div id='menu' onClick={handleMenuClick}>
                <img src={image} alt="menu" draggable="false" />
            </div>
            {active ? 
                <div className='menu-dropdown-content' >
                    <div onClick={handleGameListClick}>Gamelist</div>
                    <div onClick={handleIntraClick} >Intra</div>
                </div>
                :
                <></>
            }
        </div>
    )
}