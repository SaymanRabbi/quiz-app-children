import React from 'react';
import Question from './Question'
import classes from '../Styles/Analysis.module.css'
const Analysis = ({answers}) => {
    return (
        <div class={classes.analysis}>
          <h1>Question Analysis</h1>
        <Question answers={answers} />
            </div>
    );
};

export default Analysis;