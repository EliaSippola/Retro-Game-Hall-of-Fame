import './Banner.css'

export function Banner({header, desc}) {
  return (
    <div id='banner'>
        <div></div>
        <h1>{header}</h1>
        <p>{desc}</p>
    </div>
  )
}