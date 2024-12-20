import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import LoginForm from "./LoginForm";
import { SideBar } from "../common/SideBar";

const LoginSite = () => {

    return (
        <div>
            <Header />
            <div id='content'>
                <LoginForm />
                <SideBar />
            </div>
            <Footer />
        </div>
    )
}

export default LoginSite;