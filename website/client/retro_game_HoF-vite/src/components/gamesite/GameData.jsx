import { Banner } from './Banner';
import './gameData.css';

export function GameData(data) {

    console.log(data);

    return (
      <div id='gamedata'>
        <Banner header={data.game[0].game_name.en} desc={data.game[0].description.en} />
        <div id='recordContainer'><p>records</p></div>
      </div>
    )
}