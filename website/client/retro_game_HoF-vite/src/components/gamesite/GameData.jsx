import { Banner } from './Banner';
import './gameData.css';
import { RecordContainer } from './RecordContainer';

export function GameData(data) {

    console.log(data);

    return (
      <div id='gamedata'>
        <Banner game={data.game[0]} />
        <RecordContainer records={data.game[0]} />
      </div>
    )
}