import React from 'react';
import classes from './ReadAll.module.css'

const ReadAll = () => {
    return (
        <div className={classes.group}>
            <div className={classes.overlapGroup}>

                <div className={classes.label}>
                    <div className={classes.textWrapper}>Читати повністю</div>
                </div>

                <svg className={classes.img} width="222" height="29" viewBox="0 0 222 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M-5.84597e-07 14.6259L219.5 14.6218M219.5 14.6218L207.719 0.999878M219.5 14.6218L207.719 27.9999"
                        stroke="#F2F5FF" stroke-width="3"/>
                </svg>

            </div>
        </div>
    );
};

export default ReadAll;