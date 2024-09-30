// "*"

import React, { useEffect, useState } from "react";

import { Header } from './../common/Header';
import { Footer } from './../common/Footer';
import { Games } from './../main/Games';
import { SideBar } from './../common/SideBar';
import { Search } from './../main/Search';
import { Paginator } from '../common/Paginator';
import { getAllGameData } from "../../methods/gameData";

const Main = () => {
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        setData(getAllGameData());
    }, []);

    console.log(data);

    function getCurrentGames(arr, amount, num) {
        return arr.slice((num - 1) * amount, (num - 1) * amount + amount)
    }

    return (
        <div>
            <Header />
            <div id='content'>
                <div id='gameData'>
                    <Search />
                    {data == null ?
                        <div id="placeholder"><p>Loading...</p></div>
                        :
                        <>
                        {data.games.length > 0 ?
                            <>
                            <Games data={getCurrentGames(data.games, 20, page)} />
                            <Paginator amount={data.games.length} perpage={20} setPage={setPage} page={page} />
                            </>
                            :
                            <div id="placeholder"><p>No games</p></div>
                        }
                    </>
                    }
                </div>
                <SideBar />
            </div>
            <Footer />
        </div>
    )
}

export default Main;