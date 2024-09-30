import { useState } from 'react';
// import { Categories } from './Categories'
import './RecordContainer.css'
import { Record } from './Record';
import { Paginator } from '../common/Paginator';

export function RecordContainer({ records }) {
  // const [category, setCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  function getCurrentRecords(arr, amount, num) {
    return arr.slice((num - 1) * amount, (num - 1) * amount + amount)
  }

  return (
    <div id='recordcontainer'>
        {/* <Categories setCategory={setCategory} /> */}
        { getCurrentRecords(records.hall_of_fame.sort((a, b) => {return b.score - a.score}), 20, currentPage).map((rec, i) => (
          <Record record={rec} key={i} id={i + ((currentPage - 1) * 20)} />
        ))}
        <Paginator amount={records.hall_of_fame.length} perpage={20} setPage={setCurrentPage} page={currentPage} />
    </div>
  )
}