import React from 'react';
import classes from '../Styles/Illustration.module.css'
import signup from '../assets/images/signup.svg'
const Illustration = () => {
    return (
        <div class={classes.illustration}>
        <img src={signup} alt="Signup" />
      </div>
    );
};

export default Illustration;