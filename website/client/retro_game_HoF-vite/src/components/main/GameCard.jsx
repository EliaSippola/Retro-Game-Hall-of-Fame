import { useNavigate } from 'react-router-dom';
import './GameCard.css'
import { getPhoto } from '../../methods/gameData';
import defaultPhoto from '../../assets/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpeg';
import { useEffect, useState } from 'react';

export function GameCard( data ) {

  const navigate = useNavigate();
  const [image, setImage] = useState("");

  const handleClick = (data) => {
    navigate(`/game/${data.game.ID}`)
  }

  const fetchImage = async () => {
      const img = await getPhoto(data.game.game_image);
      setImage(img);
  }

  useEffect(() => {
      fetchImage();
  }, []);

  return (
    <div className='cardContainer'>
      {image == null ?
        <div id='gamecard' onClick={() => handleClick(data)} style={{ backgroundImage: `url(${defaultPhoto})`}} >
          <div>
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
        :
        <div id='gamecard' onClick={() => handleClick(data)} style={{ backgroundImage: `url(${image})`}} >
          <div>
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
      }
    </div>
  )
}