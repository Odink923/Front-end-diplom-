import React from 'react';
import classes from './ForwardButton.module.css';

const ForwardButton = ( { children } ) => {
    return (
        <button className={classes.forwardButton}>
            {children}
        </button>
    );
};

export default ForwardButton;