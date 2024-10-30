import { useEffect, useState } from 'react';
import './GameEdit.css';
import { Search } from '../common/Search';

export function GameEdit({games}) {

    const [filter, setFilter] = useState("");
    const [current, setCurrent] = useState(-1);

    const handleClick = (e) => {
        current == e.currentTarget.dataset.key ? setCurrent(-1) :
        setCurrent(e.currentTarget.dataset.key);
    }

    useEffect(() => {
        setCurrent(-1);
    }, [filter]);

    return (
        <div id="gameedit">
            <Search value={filter} setValue={setFilter} />
            {games.filter((a) => {return a.game_name.en.includes(filter)}).map((game, i) => {
                return (
                    <div key={game.ID} id="gameeditcard">
                        <div className="gameData" onClick={handleClick} data-key={i} >
                            <p>Name: {game.game_name.en}</p>
                            <p>Description: {game.description.en}</p>
                        </div>

                        <div className='hiddenFrom' style={current == i ? {} : {display: "none"}} >
                            <form onSubmit={() => {alert("hi")}}>
                                <input type='text'></input>
                            </form>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}