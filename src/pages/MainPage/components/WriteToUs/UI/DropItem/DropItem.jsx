import React from 'react';
import classes from './DropItem.module.css'
const DropItem = ({children, onClick}) => {
    return (
        <span onClick={onClick} className={classes.container}>
            {children}
        </span>
    );
};

export default DropItem;