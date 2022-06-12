import React from 'react';
import image from '../assets/images/3.jpg'
import classes from '../Styles/Video.module.css'
const Video = ({title,id,noq}) => {
    return (
       
            <div className={classes.video}>
              <img src={image} alt="" />
        <p>{title}</p>
              <div className={classes.qmeta}>
          <p>{noq} Question</p>
          <p>Total : {noq * 5}</p>
              </div>
            </div>
          
    );
};

export default Video;