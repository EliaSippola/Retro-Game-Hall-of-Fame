// "/game/:id"

import React, { useEffect, useState } from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { SideBar } from "../common/SideBar";
import { useParams } from "react-router-dom";
import { getOneGameData } from "../../methods/gameData";
import { GameData } from "./GameData";

const GameSite = () => {
    const [game, setGame] = useState([]);
    const param = useParams();

    useEffect(() => {
        setGame(getOneGameData(param.id));
    }, []);

    return (
        <div>
            <Header />
            <div id='content'>
                { game.length > 0 ? 
                    <div><GameData game={game} /></div>
                    :
                    <div><div></div></div>
                }
                <SideBar />
            </div>
            <Footer />
        </div>
    )
}

export default GameSite;