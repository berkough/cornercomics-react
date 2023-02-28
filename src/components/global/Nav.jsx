import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

export default function Nav(){
    return(
        <nav className='nav'>
            <img src={logo} height='80px' alt='Corner Comics Logo' />
            <ul>
                <li><Link to='/'>Main</Link></li>
                <li><Link to='/collection'>Collection</Link></li>
                <li><Link to='/options'>Options</Link></li>
            </ul>
        </nav>
    )
}