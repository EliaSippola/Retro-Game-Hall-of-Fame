import { useState } from 'react'
import './Search.css'

export function Search({value, setValue}) {

  const [localVal, setLocalVal] = useState(value);

  const sendChange = (e) => {
    setValue(e);
  }

  const debounce = (cbFn, delay) => {
    let timeoutId = null;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        cbFn.apply(null, args);
      }, delay);
    }
  }

  const handleChange = debounce(e => {
    sendChange(e.target.value);
  }, 200);

  return (
    <div id='search'>
        <input type="text" placeholder='Search' id='searchBox' value={localVal} onChange={(e) => {handleChange(e); setLocalVal(e.target.value)}} />
    </div>
  )
}