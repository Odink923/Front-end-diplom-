import React from 'react';
import classes from "./UIButton3.module.css";

const UiButton3 = ({ onClick, children }) => {
    return (
            <button onClick={onClick} className={classes.uiButton3Layout}>
                <span className={classes.uiButton3SpanText}>{children}</span>
            </button>
    );
};

export default UiButton3;