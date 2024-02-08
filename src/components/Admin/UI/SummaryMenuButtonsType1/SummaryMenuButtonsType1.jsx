import React from 'react';
import classes from './SummaryMenuButtonsType1.module.css'
import IconManager from '../Icons/IconsManager'

const SummaryMenuButtonsType1 = ({children}, {handle}) => {
    return (
        <button className={classes.generalButton} onClick={handle}>
            <div className={classes.buttonContent}>
                <IconManager iconId="10"/>
                <p>{children}</p>
            </div>

        </button>

    );
};

export default SummaryMenuButtonsType1;