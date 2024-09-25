// "*"

import React, { useEffect, useState } from "react";

import { Header } from './../common/Header';
import { Footer } from './../common/Footer';
import { Games } from './../main/Games';
import { SideBar } from './../common/SideBar';
import { Search } from './../main/search';
import { Paginator } from './../main/Paginator';
import { getAllGameData } from "../../methods/gameData";

const Main = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        setData(getAllGameData());
    }, []);

    return (
        <div>
            <Header />
            <div id='content'>
                <div id='gameData'>
                    <Search />
                    <Games data={data} />
                    <Paginator />
                </div>
                <SideBar />
            </div>
            <Footer />
        </div>
    )
}

export default Main;