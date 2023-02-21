import { Link } from 'react-router-dom';

export default function Nav(){
    return(
        <nav>
            <ul>
                <li><Link to='/'>Main</Link></li>
                <li><Link to='/collection'>Collection</Link></li>
                <li><Link to='/options'>Options</Link></li>
            </ul>
        </nav>
    )
}