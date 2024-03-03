import React from 'react';
import classes from './SummaryMenuButtonsType1.module.css'
import IconManager from '../../Icons/IconsManager'


const SummaryMenuButtonsType1 = ({children}, {oco} /*{handle}*/) => {



    return (

        <button className={classes.generalButton} /*onClick={handle}*/>
            <div className={classes.buttonContent}>
                <IconManager iconId="16"></IconManager>
                <p>{children}</p>
            </div>

        </button>

    );
};

export default SummaryMenuButtonsType1;