import React from 'react';
import classes from './ViewMoreButton.module.css'

const ViewMoreButton = () => {
    return (
        <div className={classes.frame}>
            <svg className={classes.vector} width="25" height="214" viewBox="0 0 25 214" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path id="Vector 6" d="M12.0486 0L12.0486 212M12.0486 212L23.2986 202.25M12.0486 212L1 202.25"
                      stroke="#F2F5FF" stroke-width="3"/>
            </svg>
            <div className={classes.textWrapper}>Дізнатися більше</div>
        </div>
    );
};

export default ViewMoreButton;