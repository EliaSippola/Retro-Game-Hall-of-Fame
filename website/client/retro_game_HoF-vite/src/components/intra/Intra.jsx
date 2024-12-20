import React, { useEffect, useState } from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { getAllUsers, getUser } from "../../methods/userData";
import { useNavigate } from "react-router-dom";
import { getGames } from "../../methods/gameData";
import { UserEdit } from "./UserEdit";
import { GameEdit } from "./GameEdit";
import './Intra.css';
import UserCreate from "./UserCreate";

const Intra = () => {

    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [games, setGames] = useState([]);
    const [selector, setSelector] = useState(0);

    const [update, setUpdate] = useState(0);

    useEffect(() => {
        checkLogin();
    }, []);

    useEffect(() => {
        if (update == 1) {
            checkLogin();
            setUpdate(0);
        }
    }, [update]);

    const checkLogin = async () => {
        const tempUserData = getUser();
        if (tempUserData._id == '') {
            navigate('/unauthorized');
        } else {
            await getUsers(tempUserData._id);
        }
    }

    const getUsers = async (id) => {
        const tempAllUsers = await getAllUsers(id);
        if (tempAllUsers == false) {
            navigate('/unauthorized');
        } else {
            setUsers([...tempAllUsers]);
            getGamesAsync();
        }
    }

    const getGamesAsync = async () => {
        setGames(await getGames());
    }

    const handleCategoryClick = (e) => {
        setSelector(e.target.value);
    }

    return (
        <div>
            <Header />
            <div id='content'>
                <div id="intra">
                    <div id="categoryselector">
                        <input type="radio" onClick={handleCategoryClick} id="userCategory" name="category" value={0} defaultChecked />
                        <label htmlFor="userCategory">Users</label>
                        <input type="radio" onClick={handleCategoryClick} id="gameCategory" name="category" value={1} />
                        <label htmlFor="gameCategory">Games</label>
                    </div>
                    {selector == 0 ? 
                        <>
                        <UserCreate setUpdate={setUpdate} />
                        <UserEdit users={users} setUpdate={setUpdate} />
                        </>
                        :
                        <GameEdit games={games} setUpdate={setUpdate} />
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Intra;