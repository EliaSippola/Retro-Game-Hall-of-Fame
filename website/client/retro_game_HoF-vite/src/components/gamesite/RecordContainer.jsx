import { useState } from 'react';
// import { Categories } from './Categories'
import './RecordContainer.css'
import { Record } from './Record';
import { Paginator } from '../common/Paginator';
import { Search } from '../common/Search';

export function RecordContainer({ records }) {
  // const [category, setCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // for search
  const [value, setValue] = useState("");

  function getCurrentRecords(arr, amount, num, filter) {
    const unFiltered = arr.slice((num - 1) * amount, (num - 1) * amount + amount);
    // add position values to array
    unFiltered.forEach((elem, i) => {
      elem.pos = i;
    });
    // filter for search
    return unFiltered.filter((a) => {return a.username.toLowerCase().includes(filter.toLowerCase())});
  }

  return (
    <div id='recordcontainer'>
        <Search value={value} setValue={setValue} />
        {/* <Categories setCategory={setCategory} /> */}
        { getCurrentRecords(records.hall_of_fame.sort((a, b) => {return b.score - a.score}), 20, currentPage, value).map((rec, i) => (
          <Record record={rec} key={i} id={rec.pos + ((currentPage - 1) * 20)} />
        ))}
        <Paginator amount={records.hall_of_fame.length} perpage={20} setPage={setCurrentPage} page={currentPage} />
    </div>
  )
}