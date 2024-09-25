import { GameCard } from './GameCard'
import './Games.css'

export function Games(data) {

  return (
    <div id='games'>
      {data.data == null ? 
      Array(18).map((e, i) => 
        <GameCard game={null} key={i} />
      )
      :
      data.data.games.map(game => 
        <GameCard game={game} key={game.ID} /> 
      )}
    </div>
  )
}