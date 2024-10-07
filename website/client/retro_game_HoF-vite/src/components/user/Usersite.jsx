import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { SideBar } from "../common/SideBar";
import UserEdit from "./UserEdit";

const Usersite = () => {

    return (
        <div>
            <Header />
            <div id='content'>
                <UserEdit />
                <SideBar />
            </div>
            <Footer />
        </div>
    )
}

export default Usersite;