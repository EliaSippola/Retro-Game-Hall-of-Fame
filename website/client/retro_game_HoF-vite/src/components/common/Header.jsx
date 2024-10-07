import './Header.css'
import logo1 from './../../assets/logo1.png';
import { Login } from './Login';
import { Menu } from './Menu';

export function Header() {

  return (
    <div id='header'>
        <img src={logo1} alt="logo" id='logo' />
        <div className='spacer'></div>
        <Login />
        <Menu />
    </div>
  )
}