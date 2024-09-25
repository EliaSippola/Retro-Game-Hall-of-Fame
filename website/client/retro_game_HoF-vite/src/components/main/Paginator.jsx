import './Paginator.css'

export function Paginator() {
  return (
    <div id='paginator'>
        <div>&lt;</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div className='dots'>...</div>
        <div>6</div>
        <div>&gt;</div>
    </div>
  )
}