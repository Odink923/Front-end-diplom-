import React from 'react';
import classes from "./UIButton2.module.css"

const UiButton2 = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className={classes.uiButton2Layout}>
            <span className={classes.uiButton2SpanText}>{children}</span>
        </button>
    );
};

export default UiButton2;