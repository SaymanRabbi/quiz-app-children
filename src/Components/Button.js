import classes from "../Styles/Button.module.css";

import React from 'react';

const Button = ({ className, children, ...rest }) => {
  return (
    <button className={`${classes.button} ${className}`} {...rest}>
          {children}
        </button>
  );
};

export default Button;