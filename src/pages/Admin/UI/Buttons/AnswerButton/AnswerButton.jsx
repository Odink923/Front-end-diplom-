import React from 'react';
import classes from './AnswerButton.module.css'

const AnswerButton = ( { children } ) => {
    return (
        <button className={classes.answerButton}>
            {children}
        </button>
    );
};

export default AnswerButton;