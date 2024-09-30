import { GameCard } from './GameCard'
import './Games.css'

export function Games(data) {

  return (
    <div id='games'>
      {data.data.map(game => (
          <GameCard game={game} key={game.ID} /> 
        ))
      }
    </div>
  )
}