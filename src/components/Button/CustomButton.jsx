import React from 'react';
import classes from './CustomButton.module.css'
const CustomButton = ({children, onClick}) => {
    return (
        <button className={classes.customButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default CustomButton;