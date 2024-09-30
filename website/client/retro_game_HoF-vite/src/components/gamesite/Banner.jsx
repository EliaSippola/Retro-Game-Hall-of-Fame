import './Banner.css'

export function Banner({game}) {

  return (
    <div id='banner'>
        <div id="spacer"></div>
        <h1>{game.game_name.en}</h1>
        <p>{game.description.en}</p>
        <div id='gamedetails'>
          <p>Producer: {game.maker}</p>
          <p>Publisher: {game.publisher}</p>
          <p>Publish year: {game.launched_year}</p>
          <p>Genre: {game.genre}</p>
        </div>
    </div>
  )
}