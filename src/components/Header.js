//dev tools
import { NavLink } from 'react-router-dom';

//images
import logo from '../images/logo.png';



const Header = () => {
    return(
        <header>
            <NavLink to = '/' exact><img src={logo} alt="Logo for the Ultimate Movie Database." /></NavLink>

            <nav className = 'nav-bar'>
                <ul>
                    <li><NavLink to='/' exact className='nav-item'>Home</NavLink></li>
                    <li><NavLink to ='/about' className='nav-item'>About</NavLink></li>
                    <li><NavLink to='/favourite' className='nav-item'>Favs</NavLink></li>
                </ul>
            </nav>
            
        </header>
    )
}
export default Header;