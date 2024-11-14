import { useEffect, useState } from 'react';
import './GameEdit.css';
import { Search } from '../common/Search';
import { updateGame } from '../../methods/gameData';
import { getUser } from '../../methods/userData';

export function GameEdit({ games, setUpdate }) {

    const [filter, setFilter] = useState("");
    const [current, setCurrent] = useState(-1);

    const [tmpGame, setTmpGame] = useState({_id: "", name: "", description: ""});

    const handleClick = (e) => {
        current == e.currentTarget.dataset.key ? setCurrent(-1) :
        setCurrent(e.currentTarget.dataset.key);

        const id = e.currentTarget.dataset.id;

        if (id == tmpGame._id) {
            setCurrent(-1);
            setTmpGame({_id: "", name: "", description: ""});
            return;
        }

        const gameArr = games.filter((a) => {return a._id == id});

        if (gameArr.length == 0) {
            return;
        } else {
            setTmpGame({_id: gameArr[0]._id, name: gameArr[0].game_name.en, description: gameArr[0].description.en});
        }

    }

    useEffect(() => {
        setCurrent(-1);
        setTmpGame({_id: "", name: "", description: ""});
    }, [filter]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (tmpGame._id == "") {
            return;
        }

        if (updateGame(getUser()._id, tmpGame._id, tmpGame.name, tmpGame.description)) {
            setCurrent(-1);
            setTmpGame({_id: "", name: "", description: ""});
            setUpdate(1);
        }
    }

    const handleChange = (e) => {
        setTmpGame({
            ...tmpGame,
            [e.currentTarget.dataset.type]: e.target.value
    })
    }

    return (
        <div id="gameedit">
            <Search value={filter} setValue={setFilter} />
            {games.filter((a) => {return a.game_name.en.toLowerCase().includes(filter.toLowerCase())}).map((game, i) => {
                return (
                    <div key={game.ID} id="gameeditcard">
                        <div className="gameData" onClick={handleClick} data-key={i} data-id={game._id} >
                            <p>Name: {game.game_name.en}</p>
                            <p>Description: {game.description.en}</p>
                        </div>

                        <div className='hiddenFrom' style={current == i ? {} : {display: "none"}} >
                            <form onSubmit={handleSubmit}>
                                <input type='text' placeholder='name' value={tmpGame.name} data-type="name" onChange={handleChange} className='gameform-name' />
                                <input type="submit" value="save" />
                                <textarea placeholder='description' value={tmpGame.description} data-type="description" onChange={handleChange} className='gameform-description' />
                            </form>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}