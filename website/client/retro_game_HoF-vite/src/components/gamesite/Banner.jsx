import { useEffect, useState } from 'react';
import './Banner.css'
import { getPhoto } from '../../methods/gameData';
import defaultPhoto from '../../assets/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpeg';
import { Back } from '../common/Back';

export function Banner({game}) {

  const [image, setImage] = useState("");

  const fetchImage = async () => {
      const img = await getPhoto(game.game_image);
      setImage(img);
  }

  useEffect(() => {
      fetchImage();
  }, []);

  return (
    <>
    {image == null ? 
    <div id='banner' style={{ backgroundImage: `url(${defaultPhoto})`}} >
      <div>
      <div id="spacer"></div>
      <h1>{game.game_name.en}</h1>
      <p>{game.description.en}</p>
      <div id='gamedetails'>
        <p>Producer: {game.maker}</p>
        <p>Publisher: {game.publisher}</p>
        <p>Publish year: {game.launched_year}</p>
        <p>Genre: {game.genre}</p>
      </div>
      <Back />
      </div>
    </div>
  :
    <div id='banner' style={{ backgroundImage: `url(${image})`}} >
      <div>
      <div id="spacer"></div>
      <h1>{game.game_name.en}</h1>
      <p>{game.description.en}</p>
      <div id='gamedetails'>
        <p>Producer: {game.maker}</p>
        <p>Publisher: {game.publisher}</p>
        <p>Publish year: {game.launched_year}</p>
        <p>Genre: {game.genre}</p>
      </div>
      <Back />
      </div>
    </div>
  }
  </>
  )
}