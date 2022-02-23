import React from 'react'
import classes from './Header.module.css';
import { Link} from "react-router-dom";


const Header = () => {
  return (
    <nav >
        <ul className={classes.header}>
            <li>
                <Link to="/" >Form</Link>
            </li>
            <li> <Link to="/feedback">Table</Link></li>
        </ul>
    </nav>
  )
}

export default Header