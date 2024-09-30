import './Paginator.css'

export function Paginator({ amount, perpage, setPage, page }) {
  const nums = []

  for (let i = 1; i <= Math.ceil(parseInt(amount) / parseInt(perpage)); i++) {
    nums.push(i);
  }

  const handleClick = (e) => {
    setPage(parseInt(e.target.textContent));
  }

  return (
    <>
      {nums.length > 1 ?
        <div id='paginator'>
            {nums.map((num, i) => (
              i == page-1 ?
              <div key={i} onClick={handleClick} className='currentPage'>{num}</div>
              :
              <div key={i} onClick={handleClick}>{num}</div>
            ))}
        </div>
      :
      <></>
      }
    </>
  )
}