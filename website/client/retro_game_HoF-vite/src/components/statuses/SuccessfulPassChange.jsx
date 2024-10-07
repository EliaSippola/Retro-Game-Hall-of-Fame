import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { SideBar } from "../common/SideBar";

const Usersite = () => {

    return (
        <div>
            <Header />
            <div id='content'>
                <div>
                    <h2>Password succesfully changed</h2>
                    <p className="link"></p>
                </div>
                <SideBar />
            </div>
            <Footer />
        </div>
    )
}

export default Usersite;