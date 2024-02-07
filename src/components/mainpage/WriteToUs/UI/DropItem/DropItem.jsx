import React from 'react';
import classes from './DropItem.module.css'
const DropItem = ({children}) => {
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};

export default DropItem;