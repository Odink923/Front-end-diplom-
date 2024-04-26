import React from 'react';
import classes from './ReadAll.module.css'

const ReadAll = ({children,  visible}) => {
    return (
        <div className={classes.group}>
            <div className={classes.overlapGroup}>
                {visible?
                <div className={classes.label}>
                    <div className={classes.textWrapper}>Читати повністю</div>
                </div>
                    :" "
                }
                {children}
            </div>
        </div>
    );
};

export default ReadAll;