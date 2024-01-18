import React from 'react';
import classes from './SendButton.module.css'
const SendButton = ({children}) => {
    return (
        <button className={classes.customButton}>
            {children}
        </button>
    );
};

export default SendButton;