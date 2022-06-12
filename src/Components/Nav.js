import React from 'react';
import Account from './Account';
import classes from '../Styles/Nav.module.css'
import logo from '../assets/images/taghive.svg'
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className={classes.nav}>
      <ul>
        <li>
          <Link to='/' className={classes.brand}>
            <img src={logo} alt="" />
          </Link>
        </li>
      </ul>
       <Account/>
    </nav>
    );
};

export default Nav;