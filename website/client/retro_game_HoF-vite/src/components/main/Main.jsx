// "*"

import React, { useEffect, useState } from "react";

import { Header } from './../common/Header';
import { Footer } from './../common/Footer';
import { Games } from './../main/Games';
import { SideBar } from './../common/SideBar';
import { Search } from '../common/Search';
import { Paginator } from '../common/Paginator';
import { getGames } from "../../methods/gameData";

const Main = () => {
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);
    const [value, setValue] = useState("");

    useEffect(() => {
        getGamesAsync();
    }, []);

    const getGamesAsync = async () => {
        setData(await getGames());
    }

    function getCurrentGames(arr, amount, num, filter) {
        return arr.slice((num - 1) * amount, (num - 1) * amount + amount).filter(a => a.game_name.en.toLowerCase().includes(filter.toLowerCase()));
    }

    return (
        <div>
            <Header />
            <div id='content'>
                <div id='gameData'>
                    <Search value={value} setValue={setValue} />
                    {data == null ?
                        <div id="placeholder"><p>Loading...</p></div>
                        :
                        <>
                        {data.length > 0 ?
                            <>
                            <Games data={getCurrentGames(data, 20, page, value)} />
                            <Paginator amount={data.length} perpage={20} setPage={setPage} page={page} />
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