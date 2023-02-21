import logo from '../assets/logo.png';
import Search from './Search';

export default function Main(){
    return(
      <div>
        <img src={logo} alt='Corner Comics Logo' /><br />
        <Search />
      </div>  
    )
}