import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { SideBar } from "../common/SideBar";
import { useNavigate } from "react-router-dom";

const Usersite = () => {

    const navigate = useNavigate();
    
    const handleLinkClick = () => {
        navigate('/');
    }

    return (
        <div id="successfulpasschange">
            <Header />
            <div id='content'>
                <div>
                    <h2>Password succesfully changed</h2>
                    <p className="link" onClick={handleLinkClick}>Back to home page</p>
                </div>
                <SideBar />
            </div>
            <Footer />
        </div>
    )
}

export default Usersite;