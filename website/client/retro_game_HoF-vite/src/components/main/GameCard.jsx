import { useNavigate } from 'react-router-dom';
import './GameCard.css'

export function GameCard( data ) {

  const navigate = useNavigate();

  const handleClick = (data) => {
    navigate(`/game/${data.game.ID}`)
  }

  return (
    <div className='cardContainer'>
        <div id='gamecard' onClick={() => handleClick(data)} >
            <div></div>

            {
              data == null ? 
              <div>
                <h2>Game 1</h2>
                <p>description.</p>
              </div>
              :
              <div>
                <h2>{data.game.game_name.en}</h2>
                <p>{data.game.description.en}</p>
              </div>
            }
        </div>
    </div>
  )
}