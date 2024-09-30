import { Banner } from './Banner';
import './GameData.css';
import { RecordContainer } from './RecordContainer';

export function GameData(data) {

    return (
      <div id='gamedata'>
        <Banner game={data.game[0]} />
        <RecordContainer records={data.game[0]} />
      </div>
    )
}