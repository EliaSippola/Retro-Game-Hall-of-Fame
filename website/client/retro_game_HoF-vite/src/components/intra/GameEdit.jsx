import './GameEdit.css';

export function GameEdit({games}) {

    console.log(games);

    return (
        <div id="gameedit">
            {games.map(game => {
                return (
                    <div key={game.ID} id="gameeditcard">
                        <p>id: {game._id}</p>
                        <p>Name: {game.game_name.en}</p>
                        <p>Description: {game.description.en}</p>
                    </div>
                )
            })}
        </div>
    )

}