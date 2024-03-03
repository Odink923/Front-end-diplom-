import React from 'react';
import classes from './SummaryMenuButtonsType2.module.css';

const SummaryMenuButtonsType2 = ({children}, {handle}) => {
    return (
        <button className={classes.generalButton} onClick={handle}>
            <div className={classes.buttonContent}>
                <p>{children}</p>
            </div>
        </button>
    );
};

export default SummaryMenuButtonsType2;