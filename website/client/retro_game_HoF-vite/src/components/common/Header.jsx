import './Header.css'
import logo1 from './../../assets/logo1.png';
import { Login } from './Login';

export function Header({state}) {
  return (
    <div id='header'>
        <img src={logo1} alt="logo" id='logo' />
        <div></div>
        <Login state={state} />
    </div>
  )
}