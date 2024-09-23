import './Header.css'
import logo1 from './../assets/logo1.png';

export function Header() {
  return (
    <div id='header'>
        <img src={logo1} alt="logo" id='logo' />
    </div>
  )
}