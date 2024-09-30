import './Categories.css'

export function Categories({ setCategory }) {

  const handleChange = (e) => {
    setCategory(e.target.value);
  }

  return (
    <div id='categories'>
        <label>
            <input type='radio' name='category' onClick={handleChange} value={1} defaultChecked />
            <span>Hello</span>
        </label>
        <label>
            <input type='radio' name='category' onClick={handleChange} value={2} />
            <span>world</span>
        </label>
    </div>
  )
}