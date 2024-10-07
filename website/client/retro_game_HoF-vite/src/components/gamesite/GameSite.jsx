// "/game/:id"

import React, { useEffect, useState } from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { SideBar } from "../common/SideBar";
import { useParams } from "react-router-dom";
import { getOneGame } from "../../methods/gameData";
import { GameData } from "./GameData";

const GameSite = () => {
    const [game, setGame] = useState([]);
    const param = useParams();

    useEffect(() => {
        getOneGameAsync(param.id);
    }, []);

    const getOneGameAsync = async (id) => {
        setGame(await getOneGame(id));
    }

    return (
        <div>
            <Header />
            <div id='content'>
                { game != null && game.length > 0 ? 
                    <div><GameData game={game} /></div>
                    :
                    <div id="placeholder"><p>Loading...</p></div>
                }
                <SideBar />
            </div>
            <Footer />
        </div>
    )
}

export default GameSite;