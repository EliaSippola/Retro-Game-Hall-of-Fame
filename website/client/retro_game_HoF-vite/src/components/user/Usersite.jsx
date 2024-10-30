import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { SideBar } from "../common/SideBar";
import UserChangePass from "./UserChangePass";

const Usersite = () => {

    return (
        <div>
            <Header />
            <div id='content'>
                <UserChangePass />
                <SideBar />
            </div>
            <Footer />
        </div>
    )
}

export default Usersite;