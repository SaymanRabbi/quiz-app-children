import React from 'react';
import Account from './Account';
import classes from '../Styles/Nav.module.css'
import logo from '../assets/images/taghive.svg'

const Nav = () => {
    return (
        <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="" />
          </a>
        </li>
      </ul>
       <Account/>
    </nav>
    );
};

export default Nav;