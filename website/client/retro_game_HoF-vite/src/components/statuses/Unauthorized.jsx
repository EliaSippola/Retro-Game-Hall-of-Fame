import React from "react";
import './Unauthorized.css';
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { SideBar } from "../common/SideBar";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {

    const navigate = useNavigate();
    
    const handleLinkClick = () => {
        navigate('/');
    }

    return (
        <div>
            <Header state={1} />
            <div id='content'>
                <div id="unauthorized">
                    <h2>Unauthorized</h2>
                    <p className="link" onClick={handleLinkClick}>Return to Home page</p>
                </div>
                <SideBar />
            </div>
            <Footer />
        </div>
    )
}

export default Unauthorized;