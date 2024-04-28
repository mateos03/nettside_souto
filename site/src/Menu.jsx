import { NavLink } from 'react-router-dom';
import './css/Menu.css'

export default function Menu() {
    return(
        <div className='menu'>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/yep">Press it</NavLink>
            <NavLink exact to="/random1">Random1</NavLink>
            <NavLink exact to="/random2">Random2</NavLink>
            <NavLink exact to="/random3">Random3</NavLink>
        </div>
    )
  }